import React from 'react';
import { KeyboardAvoidingView, Image, View, TouchableOpacity, Text, StyleSheet, TextInput, ScrollView, Dimensions } from 'react-native';
import CategoryPicker from '../components/CategoryPicker';
import { CheckBox } from 'react-native-elements';
import Colors, { GlobalStyles } from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import ImageResizer from 'react-native-image-resizer'
import ImagePicker from 'react-native-image-picker'
import APIConsts from '../constants/APIConsts';
import User from '../controllers/user/instance';
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

const options = {
    title: 'Seleziona',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class NewGroupModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            createGroupModal: this.props.open,
            nomeGruppo: '',
            info: '',
            rules: '',
            admins: [],
            adminsFocused: false,
            selectedAdmins: []
        }
    }

    saveGroup() {
        //TODO: validate form

        // post info post
        fetch(APIConsts.apiEndpoint + "/post", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                creatore: User.getInstance().user.id,
                testo: this.state.info
            })
        })
        .then(response => response.json())
        .then((infoPostResponse) => {            
            // post rules post
            fetch(APIConsts.apiEndpoint + "/post", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    creatore: User.getInstance().user.id,
                    testo: this.state.rules
                }) 
            })
            .then(rulesRespnose => rulesRespnose.json())
            .then((rulesRespnoseJson) => {
                // post gruppo
                fetch(APIConsts.apiEndpoint + "/gruppo", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        //amministrator: [User.getInstance().user.id],
                        info: infoPostResponse.id,
                        regole: rulesRespnoseJson.id,
                        nome: this.state.nomeGruppo
                    }) 
                })
                .then(groupResponse => groupResponse.json())
                .then((groupResponseJson) => {
                    this.manageFotoProfilo(groupResponseJson)
                    this.manageFotoCopertina(groupResponseJson)
                })
            })
        })
        // post profile image and attach to gruppo
        // post cover image and attach to gruppo
    }

    manageFotoProfilo(group) {
        if (this.state.group.foto_profilo_changed) {
            const data = new FormData();
            
            data.append('refId', group.id);
            data.append('ref', 'gruppo');
            data.append('field', 'immagine_profilo');
            data.append('files', {
                uri: this.state.group.foto_profilo,
                type: 'image/jpeg', // or photo.type
                name: `${group.id}.jpg`
            });
        
            return fetch(APIConsts.apiEndpoint + "/upload", {
                method: 'POST',
                body: data
            }).then((response) => {
                console.warn("foto profilo uploaded!");
                return response.json()
            })
            .catch(e => console.error(e))
        } else {
            return group
        }
    }

    manageFotoCopertina(group) {
        if (this.state.group.foto_copertina_changed) {
            const data = new FormData();
            
            data.append('refId', group.id);
            data.append('ref', 'gruppo');
            data.append('field', 'immagine_copertina');
            data.append('files', {
                uri: this.state.group.foto_copertina,
                type: 'image/jpeg', // or photo.type
                name: `${group.id}.jpg`
            });
        
            return fetch(APIConsts.apiEndpoint + "/upload", {
                method: 'POST',
                body: data
            }).then((response) => {
                console.warn("foto copertina uploaded!");
                return response.json()
            })
            .catch(e => console.error(e))
        } else {
            return group
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
                    group: {
                        ...this.state.group,
                        foto_profilo: resizedImage.uri,
                        foto_profilo_changed: true
                    }
                });
            }).catch((err) => {
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
                    group: {
                        ...this.state.group,
                        foto_copertina: resizedImage.uri,
                        foto_copertina_changed: true
                    }
                });
            }).catch((err) => {
                // Oops, something went wrong. Check that the filename is correct and
                // inspect err to get more details.
            });
          }
        });
    }

    searchUsers(q) {
        this.setState({adminQuery: q})

        if (q.lenght < 4) {
            this.setState({admins: []})
            return;
        }

        fetch(APIConsts.apiEndpoint + "/utente?username_contains=" + q, {
            method: 'GET',
            headers: {
                'ContentType': 'application/json'
            }
        })
        .then(result => result.json())
        .then(resultJson => {
            let admins = resultJson.map(el => {
                return {
                    username: el.username,
                    id: el.id
                }
            })

            this.setState({admins})
        })
    }

    addAdmin(el) {
        let {selectedAdmins = []} = this.state;

        if (selectedAdmins.find(f => f.id == el.id) != undefined) {
            this.setState({adminsFocused: false, admins: [], adminQuery: ''})
            return;
        }
        
        selectedAdmins.push(el);

        this.setState({adminsFocused: false, selectedAdmins, admins: [], adminQuery: ''})
    }

    showAdmins() {
        return this.state.admins.map(el => {
            return (<TouchableOpacity key={el.id} style={[styles.searchResultElement, {backgroundColor: 'rgba(240,240,250, 0.2)'}]} onPress={() => this.addAdmin(el)}>
                <Text style={{marginVertical: 5, marginHorizontal: 7, fontSize: 13, color: Colors.darkGrey}}>{el.username}</Text>
            </TouchableOpacity>)
        })
    }

    removeAdmin(adminId) {
        let {selectedAdmins = []} = this.state;
        selectedAdmins = selectedAdmins.filter(el => el.id != adminId)
        this.setState({selectedAdmins})
    }

    showSelectedAdmins() {
        return this.state.selectedAdmins.map(el => {
            return (<View style={styles.tagElement} key={el.id}>
                <Text style={{marginRight: 7, marginTop: 1, fontSize: 11, color: 'white'}}>{el.username}</Text>
                <TouchableOpacity onPress={() => this.removeAdmin(el.id)}>
                    <Feather name={"x"} style={{marginTop: 2}} size={12} color={"white"} />
                </TouchableOpacity>
            </View>)
        })

    }

    render() {
        let {group = {}} = this.state;

        return (<KeyboardAvoidingView behavior={"padding"} style={styles.container} enabled>
                    
                    <View style={{marginTop: 20, borderBottomColor: Colors.lightBorder, borderBottomWidth: 0.5, height: 40, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.close(false);
                            }}>
                            <Text style={{fontSize:14, color: Colors.main, marginTop:10, marginLeft:10}}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 10 }}>NUOVO GRUPPO</Text>
                        <View style={{width: 40}}></View>
                    </View>

                    <ScrollView>
                        <View style={styles.coverContainer}>
                            <Image source={{uri: group.foto_copertina == null ? '' : group.foto_copertina}} 
                                style={styles.coverImage} />
                            <View style={styles.avatarHalo}>
                                {group.foto_profilo == undefined ?
                                    <View style={{flexDirection: 'column', justifyContent: 'center', height: 160}}>
                                        <Text style={{fontSize: 72, marginTop: -10, alignSelf: 'center'}}>
                                            {this.state.nomeGruppo != undefined && this.state.nomeGruppo != '' ? this.state.nomeGruppo.charAt(0) : 'B'}
                                        </Text>
                                    </View>
                                : 
                                    <Image
                                        style={{width:150, height:150, borderRadius:75, alignSelf: 'center'}}
                                        source={{uri: group.foto_profilo}} />
                                }
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
                        {/* <View style={{alignItems:'center', paddingTop:20, paddingBottom:20,borderBottomWidth:1, borderBottomColor:'#E5E8E8',}}>
                            <CategoryPicker title={'CATEGORIA'} />
                        </View> */}

                        <View style={{ flexDirection: 'column'}}>
                            <View style={[styles.fieldContainer]}>
                                <Text style={[styles.fieldLabel, {width: 125}]}>NOME GRUPPO</Text>
                                <TextInput 
                                    style={styles.singleInput}
                                    onChangeText={(nomeGruppo) => this.setState({nomeGruppo})}
                                    value={this.state.nomeGruppo}
                                    placeholder={'Banana'}
                                />
                            </View>

                            <View style={[styles.fieldContainer, 
                                    this.state.selectedAdmins.length > 0 || this.state.adminsFocused ? {borderBottomWidth: 0} : {} ]}>
                                <Text style={[styles.fieldLabel, {width: 125}]}>AMMINISTRATORI</Text>
                                <TextInput 
                                    style={styles.singleInput}
                                    onFocus={() => this.setState({adminsFocused: true})}
                                    onChangeText={(adminQuery) => this.searchUsers(adminQuery)}
                                    value={this.state.adminQuery}
                                    placeholder={'nome utente'}
                                />
                            </View>

                            {this.state.adminsFocused ? 
                                <View style={[styles.fieldContainer, {flexDirection: 'column', paddingTop: 0, paddingBottom: 0, paddingLeft: 150}]}>
                                    {this.showAdmins()}
                                </View>
                            : null }

                            {this.state.selectedAdmins.length > 0 ? 
                                <ScrollView 
                                    style={{flexDirection:'row', paddingHorizontal: 20, paddingVertical: 8, borderBottomColor: '#F5F5F5', borderBottomWidth: 0.5}} 
                                    horizontal={true}>
                                    {this.showSelectedAdmins()}
                                </ScrollView>
                            : null }

                            <View style={[styles.fieldContainer]}>
                                <Text style={[styles.fieldLabel, {width: 125}]}>CATEGORIA</Text>
                                <TextInput 
                                    style={styles.singleInput}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    placeholder={'...'}
                                />
                            </View>

                            <View style={[styles.fieldContainer]}>
                                <Text style={[styles.fieldLabel, {width: 125}]}>SOTTO CATEGORIE</Text>
                                <TextInput 
                                    style={styles.singleInput}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    placeholder={'...'}
                                />
                            </View>

                            <Text style={styles.sectionHeader}>Dettagli</Text>

                            <View style={styles.fieldContainer}>
                                <Text style={styles.fieldLabel}>
                                    INFO GRUPPO
                                </Text>
                                <TextInput
                                    onChangeText={(info) => this.setState({info})}
                                    numberOfLines={3}
                                    placeholder={"La comunità per tutti gli appassionati di..."}
                                    multiline={true}
                                    value={this.state.info}
                                    keyboardAppearance={'default'}
                                    style={styles.singleInput}
                                    clearButtonMode={'while-editing'}
                                />
                            </View>

                            <View style={styles.fieldContainer}>
                                <Text style={styles.fieldLabel}>
                                    REGOLE DEL GRUPPO
                                </Text>
                                <TextInput
                                    onChangeText={(rules) => this.setState({rules})}
                                    numberOfLines={3}
                                    placeholder={"Verranno bloccati tutti gli utenti che violeranno le poche regole di questo gruppo..."}
                                    multiline={true}
                                    value={this.state.rules}
                                    keyboardAppearance={'default'}
                                    style={styles.singleInput}
                                    clearButtonMode={'while-editing'}
                                />
                            </View>

                            <Text style={styles.sectionHeader}>Privacy</Text>

                            <View style={[styles.fieldContainer, {marginTop: 15, borderTopColor: '#f5f5f5', borderTopWidth: 0.5}]}>
                                <Text style={styles.fieldLabel}>VISIBILITÀ GRUPPO</Text>

                                <CheckBox
                                    center
                                    title='Pubblico'
                                    onIconPress={() => this.hideShowCheck()}
                                    checked={!this.state.checkedPrivate}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checkedColor={'#34495E'}
                                    containerStyle={{width:120, marginTop:-5, backgroundColor:'transparent', borderColor:'transparent'}}
                                />

                                <CheckBox
                                    center
                                    title='Privato'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    containerStyle={{width:100, marginTop:-5, marginLeft: -15, backgroundColor:'transparent', borderColor:'transparent'}}
                                    onIconPress={() => this.hideShowCheck()}
                                    checked={this.state.checkedPrivate}
                                    checkedColor={'#34495E'}
                                />
                            </View>
                        </View>
                        <View style={{marginTop: 15, marginBottom: 20}}>
                            <TouchableOpacity onPress={() => this.saveGroup()}
                                style={[GlobalStyles.btn, {backgroundColor: Colors.main}]}>
                                <Feather name={"check"} size={22} color={'white'}/>
                                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                                    <Text style={ {color: 'white', fontSize: 16} }>Salva</Text>
                                </View>
                                <View style={ {width: 30} } />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>)
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'column',
        backgroundColor:'white',
        flex:1,
    },

    tagElement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1abc9c',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3
    },

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
        width: 110,
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
    },

    avatarHalo: {width: 160, height: 160, alignSelf: 'center', padding: 5, borderRadius: 80, marginTop: 10, backgroundColor: 'rgba(250,250,250,0.6)'},
    coverContainer: {alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, justifyContent: 'flex-start', flexDirection: 'column', height: 185, backgroundColor: '#ff7675'}
})