import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';
import ImagePicker from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather'
import ContactTypes from '../constants/ContactTypes';

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
                foto_profilo_changed: false
            },
            contacts,
            focusedName: false,
            focusedBio: false,
            num: 0,
            selected:'',
            checkedPrivate: true,
            dataChanged: false
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
        fetch(APIConsts.apiEndpoint + "/utente/" + this.state.user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...this.state.user,
                id: undefined,
                tipoautenticazione: undefined,
                foto_profilo: undefined
            })
        }).then(response => {
            return response.json()
        }).then(responseJSON => {
            this.setState({dataChanged: false})
            User.getInstance().setUser(responseJSON);
            this.props.navigation.state.params.updateParentState()
        }).then(() => {
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
            }
          })
          .then(() => {
              this.updateUserContacts()
          })
          .catch(e => {
            console.error(e)
        })
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
            const source = { uri: response.uri };
        
            this.setState({
                user: {
                    ...this.state.user,
                    foto_profilo: source.uri,
                    foto_profilo_changed: true
                }
            }, () => this.enableSave());
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
        <View style={styles.container}>
            {
                // AVATAR
            }
            <View style={{alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, justifyContent: 'flex-start', flexDirection: 'column', height: 185}}>
                <View style={{width: 160, alignSelf: 'center'}}>
                    <Image
                        style={{width:150, height:150, borderRadius:75, borderColor: Colors.main, borderWidth: 2, alignSelf: 'center', marginTop: 15 }}
                        source={{uri: user.foto_profilo}} 
                        />
                    <View style={styles.changeAvatar}>
                        <TouchableOpacity style={styles.touchableChangeAvatar} onPress={() => this.updateAvatar()}>
                            <Feather name="camera" size={16} color={'white'} style={{alignSelf: 'center'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {
                // FIELDS
            }
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Username
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
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Password
                </Text>
                <TextInput
                    value={'*********'}
                    maxLength = {60}
                    keyboardAppearance={'default'}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Bio
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
                    value={user.bio || ''}
                    maxLength = {60}
                    keyboardAppearance={'default'}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    E-mail
                </Text>
                <TextInput
                    value={user.indirizzo_email.indexOf('instagram') >= 0 ? '' : user.indirizzo_email}
                    maxLength = {60}
                    keyboardAppearance={'default'}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>

            <View style={{flexDirection:'row', paddingTop:20, borderBottomWidth:1, borderBottomColor:'#D5D8DC', paddingBottom:15}}>

                <Text style={{fontSize:15, flex:0.6}}>Visibility</Text>

                <CheckBox
                    center
                    title='Public'
                    onIconPress={() => this.hideShowCheck()}
                    checked={!this.state.checkedPrivate}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor={Colors.main}
                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                />

                <CheckBox
                    center
                    title='Private'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                    onIconPress={() => this.hideShowCheck()}
                    checked={this.state.checkedPrivate}
                    checkedColor={Colors.main}
                />
            </View>

            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Facebook
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
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Instagram
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
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Twitter
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
        </View>
    );
  }
  
}

const styles = StyleSheet.create({
 
    container:{
        flexDirection:'column',
        padding:5,
        backgroundColor:'white',
        flex:1,

    },
    singleInput:{
        backgroundColor:'transparent',
        borderRadius:5,
        borderBottomWidth:1,
        borderColor:'#99A3A4',
        height:25,
        padding:5,
        width:220,
        marginLeft:20,
    },

    changeAvatar: {
        position: 'relative',
        top: -35,
        right: -50,
        justifyContent: 'center',
        flexDirection: 'row'
      },
  
      touchableChangeAvatar: {
        height: 32,
        width: 32,
        backgroundColor: Colors.main,
        borderRadius: 16,
        justifyContent: 'center'
      },

});
