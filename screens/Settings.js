import React, {Component} from 'react';
import { StyleSheet, Modal,Text, TextInput, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';

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
        this.state = {
            user: User.getInstance().user,
            focusedName: false,
            focusedBio: false,
            modalVisible: false,
            num:0,
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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
        }).catch(e => {
            console.error(e)
        })
    }

    renderImageSelectedModal() {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'white'}} onPress={() => {this.setState({modalVisible:false})}}>
                    <Text style={{color:Colors.main, backgroundColor:'white', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                </TouchableHighlight>
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={'white'}
                />
                    {this.state.num != 0? this.renderSaveButton(): null}
            </Modal>
        )
    }
    newImage(){
        this.setState({
            image:this.state.selected,
            modalVisible: false
        })
    }
    getSelectedImages(image, current) {
        var num = image.length;
    
        this.setState({
          num: num,
          selected: image,
        });
    }

    renderSaveButton(){
        return(
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'white', height:50}}>
                <Text style={{color:Colors.save, fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    } 
      
  render() {
      const {user} = this.state;

      return (
        <View style={styles.container}>
            <View style={{alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, paddingBottom:20}}>
                <Image
                    style={{width:80, height:80,borderRadius:40}}
                    source={{uri: user.foto_profilo}} 
                    />
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                    <Text style={{color: Colors.main, marginLeft: -5, marginTop:10}}>
                        Change avatar
                    </Text>
                    {this.renderImageSelectedModal()} 
                </TouchableOpacity>
            </View>
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
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName: false})}
                    placeholder={this.value}
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
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
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
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
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
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
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
                <Text>
                    facebook.com/leandro90
                </Text>

            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Instagram
                </Text>
                <Text>
                    Instagram.com/leandro90
                </Text>

            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Twitter
                </Text>
                <TouchableOpacity>
                    <Text style={{color:Colors.main}}>
                        link accounts
                    </Text>
                </TouchableOpacity>
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

});
