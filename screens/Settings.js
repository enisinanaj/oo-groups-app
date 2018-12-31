import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, ActivityIndicator} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';
import ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather'
import ContactTypes from '../constants/ContactTypes';
import ImageResizer from 'react-native-image-resizer'

const options = {
    title: 'Seleziona',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class Settings extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params= {}} = navigation.state;

        return {
            headerTitle: 'Impostazioni',
            headerTruncatedBackTitle: 'Indietro',
            headerRight: (
                <TouchableOpacity 
                    disabled={params.disabled != undefined ? params.disabled : true}
                    onPress={() => params.updateProfile()}
                    style={{marginRight:10}}>
                    <Text style={{fontSize: 18, color: params.disabled ? Colors.inactive : Colors.main}}>Salva</Text>
                </TouchableOpacity>
            )
        };
    };
    
    constructor(props) {
        super(props);

        let contacts = {
            facebookUsername : {changed: false},
            twitterUsername: {changed: false},
            instagramUsername: {changed: false}
        };

        User.getInstance().user.contatti.forEach(contatto => {
            contacts[ContactTypes.getNameForKey(contatto.tipocontatti)] = {
                url: contatto.url,
                id: contatto.id
            }
        })

        this.state = {
            user: {
                ...User.getInstance().user,
                foto_profilo_changed: false,
                foto_copertina_changed: false
            },
            contacts,
            focusedName: false,
            focusedBio: false,
            num: 0,
            selected:'',
            checkedPrivate: true,
            dataChanged: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            updateProfile: () => this.updateProfile(),
            disabled: true
        })
    }

    enableSave() {
        this.props.navigation.setParams({
            updateProfile: () => this.updateProfile(),
            disabled: false
        })
    }

    hideShowCheck(){
        this.setState({checkedPrivate: !this.state.checkedPrivate})
    }

    updateProfile() {
        this.setState({isLoading: true});
        fetch(APIConsts.apiEndpoint + "/utente/" + this.state.user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...this.state.user,
                id: undefined,
                tipoautenticazione: undefined,
                foto_profilo: undefined,
                foto_copertina: undefined
            })
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            this.setState({dataChanged: false})
            User.getInstance().setUser(responseJSON);
            this.props.navigation.state.params.updateParentState()
        }).then((next) => {
            return this.manageFotoProfilo(next)
        })
        .then((next) => {
            return this.manageFotoCopertina(next)
        })
        .then(() => {
            this.updateUserContacts()
        })
        .then(() => this.setState({isLoading: false}))
        .catch(e => {
            console.error(e)
        })
    }

    manageFotoProfilo(next) {
        if (this.state.user.foto_profilo_changed) {
            const data = new FormData();
            
            data.append('refId', this.state.user.id);
            data.append('ref', 'utente');
            data.append('field', 'foto_profilo');
            data.append('files', {
                uri: this.state.user.foto_profilo,
                type: 'image/jpeg', // or photo.type
                name: `${this.state.user.id}.jpg`
            });
        
            return fetch(APIConsts.apiEndpoint + "/upload", {
                method: 'POST',
                body: data
            }).then((response) => {
                return response.json()
            }).then(response => {
                this.setState({user: {
                        ...this.state.user,
                        foto_profilo: response[0].url.replace("http://localhost:1337", APIConsts.apiEndpoint)
                    }
                }, () => {
                    User.getInstance().user.foto_profilo = this.state.user.foto_profilo;
                    this.props.navigation.state.params.updateParentState()
                })
            })
            .catch(e => console.error(e))
        } else {
            return next;
        }
    }

    manageFotoCopertina(next) {
        if (this.state.user.foto_copertina_changed) {
            const data = new FormData();
            
            data.append('refId', this.state.user.id);
            data.append('ref', 'utente');
            data.append('field', 'foto_copertina');
            data.append('files', {
                uri: this.state.user.foto_copertina,
                type: 'image/jpeg', // or photo.type
                name: `${this.state.user.id}.jpg`
            });
        
            return fetch(APIConsts.apiEndpoint + "/upload", {
                method: 'POST',
                body: data
            }).then((response) => {
                return response.json()
            }).then(response => {
                this.setState({user: {
                        ...this.state.user,
                        foto_copertina: response[0].url.replace("http://localhost:1337", APIConsts.apiEndpoint)
                    }
                }, () => {
                    User.getInstance().user.foto_copertina = this.state.user.foto_copertina;
                    this.props.navigation.state.params.updateParentState()
                })
            })
            .catch(e => console.error(e))
        } else {
            return next
        }
    }

    updateUserContacts() {
        const {contacts} = this.state;
        const contactKeys = Object.keys(contacts);

        if (contactKeys.length > 0) {
            contactKeys.forEach(key => {
                if (!contacts[key].changed) {
                    return;
                }

                if (contacts[key].id != undefined) {
                    // is update or delete
                    if (contacts[key].url == "") {
                        //is delete
                        console.warn("DELETE: " + APIConsts.apiEndpoint + "/contatti/" + contacts[key].id);

                        fetch(APIConsts.apiEndpoint + "/contatti/" + contacts[key].id, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(() => {
                            this.props.navigation.state.params.updateParentState()
                        }).catch(e => console.error(e))

                        return;
                    }
                }

                fetch(APIConsts.apiEndpoint + "/contatti" + (contacts[key].id != undefined ? `/${contacts[key].id}` : ''), {
                    method: contacts[key].id != undefined ? `PUT` : 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        tipocontatti: ContactTypes.getKeyFromName(key),
                        utente: this.state.user.id,
                        url: contacts[key].url
                    })
                }).then(() => {
                    this.setState({isLoading: false})
                    this.props.navigation.state.params.updateParentState()
                }).catch(e => console.error(e))
            })
        }
    }

    updateAvatar() {
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            ImageResizer.createResizedImage(response.uri, 800, 800, 'JPEG', 80).then((resizedImage) => {
                this.setState({
                    user: {
                        ...this.state.user,
                        foto_profilo: resizedImage.uri,
                        foto_profilo_changed: true
                    }
                }, () => this.enableSave());
            }).catch((err) => {
                console.warn(err)
                // Oops, something went wrong. Check that the filename is correct and
                // inspect err to get more details.
            });
          }
        });
    }

    updateCover() {
        ImagePicker.showImagePicker(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {        
            ImageResizer.createResizedImage(response.uri, 800, 800, 'JPEG', 80).then((resizedImage) => {
                this.setState({
                    user: {
                        ...this.state.user,
                        foto_copertina: resizedImage.uri,
                        foto_copertina_changed: true
                    }
                }, () => this.enableSave());
            }).catch((err) => {
                console.warn(err)
                // Oops, something went wrong. Check that the filename is correct and
                // inspect err to get more details.
            });
          }
        });
    }

    updateUserContactInState(type, value) {
        let {contacts} = this.state;
        contacts[ContactTypes.getNameForKey(type)].url = value;
        contacts[ContactTypes.getNameForKey(type)].changed = true;

        this.enableSave();
    }
      
    render() {
      const {user, contacts} = this.state;

      return (
        <KeyboardAvoidingView style={[{flex: 1}, styles.container]} behavior={'padding'} enabled >
            {
                // AVATAR
            }
            {this.state.isLoading ?
                <View style={styles.laodingWindow}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <ActivityIndicator size={"large"} />
                    </View>
                </View>
            : null }
            <View style={{alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, justifyContent: 'flex-start', flexDirection: 'column', height: 185}}>
                <Image source={{uri: this.state.user.foto_copertina == null ? '' : this.state.user.foto_copertina}} 
                    style={styles.coverImage} />
                <View style={styles.avatarHalo}>
                    <Image
                        style={{width:150, height:150, borderRadius:75, alignSelf: 'center'}}
                        source={{uri: user.foto_profilo}} 
                        />
                    <View style={styles.changeAvatar}>
                        <TouchableOpacity style={styles.touchableChangeAvatar} onPress={() => this.updateAvatar()}>
                            <Feather name="camera" size={18} color={Colors.darkGrey} style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.changeCover} onPress={() => this.updateCover()}>
                    <Text style={{color: Colors.darkGrey, fontWeight: '500', fontSize: 12}}>CAMBIA COVER</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{flex: 1}}>
                <View style={[styles.fieldContainer, {marginTop: 15, borderTopColor: '#f5f5f5', borderTopWidth: 0.5}]}>
                    <Text style={styles.fieldLabel}>
                        USERNAME
                    </Text>
                    <TextInput
                        value={user.username}
                        onChangeText={(username) => {
                            this.setState({
                                user: {
                                    ...this.state.user,
                                    username
                                },
                                dataChanged: true
                            });
                        
                            this.enableSave()
                        }}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View>
                {/* <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        PASSWORD
                    </Text>
                    <TextInput
                        value={'*********'}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View> */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        BIO
                    </Text>
                    <TextInput
                        onChangeText={(bio) => {
                            this.setState({
                                user: {
                                    ...this.state.user,
                                    bio
                                },
                                dataChanged: true
                            });
                            
                            this.enableSave()
                        }}
                        numberOfLines={3}
                        multiline={true}
                        value={user.bio || ''}
                        maxLength={60}
                        keyboardAppearance={'default'}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        E-MAIL
                    </Text>
                    <TextInput
                        value={user.indirizzo_email.indexOf('instagram') >= 0 ? '' : user.indirizzo_email}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View>

                {/* <Text style={styles.sectionHeader}>Privacy</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>VISIBILITÀ</Text>

                    <CheckBox
                        center
                        title='Public'
                        onIconPress={() => this.hideShowCheck()}
                        checked={!this.state.checkedPrivate}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checkedColor={Colors.main}
                        containerStyle={{width:100, marginTop:-10, backgroundColor:'transparent', borderColor:'transparent'}}
                    />

                    <CheckBox
                        center
                        title='Private'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{width:100, marginTop:-10, backgroundColor:'transparent', borderColor:'transparent'}}
                        onIconPress={() => this.hideShowCheck()}
                        checked={this.state.checkedPrivate}
                        checkedColor={Colors.main}
                    />
                </View> */}

                <Text style={styles.sectionHeader}>Social</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        FACEBOOK
                    </Text>
                    <TextInput
                        onChangeText={(facebookUsername) => {
                            this.updateUserContactInState(ContactTypes.FACEBOOK, facebookUsername)
                        }}
                        value={contacts.facebookUsername.url}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        placeholder={"https://facebook.com/..."}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        INSTAGRAM
                    </Text>
                    <TextInput
                        onChangeText={(instagramUsername) => {
                            this.updateUserContactInState(ContactTypes.INSTAGRAM, instagramUsername)
                        }}
                        value={contacts.instagramUsername.url}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        placeholder={"https://instagram.com/..."}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />

                </View>
                <View style={styles.fieldContainer}>
                    <Text style={styles.fieldLabel}>
                        TWITTER
                    </Text>
                    <TextInput
                        onChangeText={(twitterUsername) => {
                            this.updateUserContactInState(ContactTypes.TWITTER, twitterUsername)
                        }}
                        value={contacts.twitterUsername.url}
                        maxLength = {60}
                        keyboardAppearance={'default'}
                        placeholder={"https://twitter.com/..."}
                        style={styles.singleInput}
                        clearButtonMode={'while-editing'}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
  }
  
}

const styles = StyleSheet.create({
 
    container:{
        flexDirection:'column',
        backgroundColor:'white',
        flex:1,
    },

    laodingWindow: {flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, backgroundColor: 'rgba(250,250,250, 0.7)', flexDirection: 'column', justifyContent: 'center'},
    avatarHalo: {width: 160, height: 160, alignSelf: 'center', padding: 5, borderRadius: 80, marginTop: 10, backgroundColor: 'rgba(250,250,250,0.6)'},

    sectionHeader: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        color: Colors.darkTitle,
        fontWeight: '500',
        marginHorizontal: 20
    },

    fieldContainer: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'flex-start',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.5
    },

    fieldLabel: {
        fontSize: 12,
        color: Colors.lighterText,
        width: 70,
        marginTop: 6
    },

    singleInput:{
        backgroundColor:'transparent',
        marginRight: 0,
        marginLeft: 10,
        padding: 5,
        fontSize: 14,
        flex: 1
    },

    changeAvatar: {
        position: 'relative',
        top: -35,
        right: -50,
        justifyContent: 'center',
        flexDirection: 'row'
    },

    coverImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 185
    },
  
    touchableChangeAvatar: {
        height: 30,
        width: 30,
        backgroundColor: 'rgba(250,250,250,0.6)',
        borderRadius: 15,
        paddingTop: 2,
        paddingLeft: 2,
        justifyContent: 'center'
    },

    changeCover: {
        backgroundColor: 'rgba(250,250,250, 0.6)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 14,
        position: 'absolute',
        bottom: 5,
        right: 5
    }

});
