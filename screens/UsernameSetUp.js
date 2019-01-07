import React from 'react';
import {StyleSheet, Text, View, Image, TextInput,TouchableOpacity} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation'
import Colors, { Shadow } from '../constants/Colors';
import User from '../controllers/user/instance'
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import APIConsts from '../constants/APIConsts';

const options = {
  title: 'Seleziona',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};


export default class UsernameSetUp extends React.Component {
  static navigationOptions = {
    title: 'Completa il tuo profilo',
    headerStyle: {
      backgroundColor: '#FFF',
    },
    headerBackTitleStyle:{
      color:'transparent',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor() {
      super();
  
      this.state = { 
        ...User.getInstance().user,
        foto_profilo_changed: false
      }
  }

  updateAvatar() {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
          foto_profilo: source.uri,
          foto_profilo_changed: true
        });
      }
    });
  }

  updateAndGoNext() { 
    var username = {
      username: this.state.username
    }

    fetch(APIConsts.apiEndpoint + "/utente/" + this.state.id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username)
    }).then(() => {
      if (this.state.foto_profilo_changed) {
          const data = new FormData();
          
          data.append('refId', this.state.id);
          data.append('ref', 'utente');
          data.append('field', 'foto_profilo');
          data.append('files', {
              uri: this.state.foto_profilo,
              type: 'image/jpeg', // or photo.type
              name: `${this.state.id}.jpg`
          });
      
          return fetch(APIConsts.apiEndpoint + "/upload", {
              method: 'POST',
              body: data
          }).then((response) => {
              return response.json()
          }).then(response => {
              this.setState({foto_profilo: response[0].url.replace("http://localhost:1337", APIConsts.apiEndpoint)})
          })
          .then(() => {
            User.getInstance().setUser({
              ...this.state,
              foto_profilo_changed: undefined
            })
          })
          .catch(e => console.error(e))
      }
    })
    .then(() => {
        this.props.navigation.navigate('ProtectedViews');
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
          <Text style={{fontSize:18, marginTop: 20, marginLeft:20, marginRight: 20, fontWeight:'bold', color: 'black'}}>Scegli un nome utente</Text>
          <Text style={{fontSize:13, marginTop:4, marginLeft: 20, marginRight: 20, color: 'black'}}>Il nome utente è il tuo identificativo all'interno di Groups</Text>
          <Image
            style={[styles.profilePicLarge]}
            source={{uri: this.state.foto_profilo}}
          />
          <View style={styles.changeAvatar}>
            <TouchableOpacity style={styles.touchableChangeAvatar} onPress={() => this.updateAvatar()}>
              <Feather name="camera" size={16} color={'white'} style={{alignSelf: 'center'}}/>
            </TouchableOpacity>
          </View>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={"false"}
            style={[styles.textInput, Shadow.filterShadow]}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder={'Nome Utente'}
            placeholderTextColor={'#aaa'}
          />
          <TouchableOpacity disabled={this.state.username == ''} onPress={() => this.updateAndGoNext()}>
            <Text style={[styles.next, this.state.username == '' ? {color: Colors.inactive} : {color: Colors.main}]}>Avanti</Text>
          </TouchableOpacity>
      </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },

    changeAvatar: {
      position: 'relative',
      top: -25,
      left: 35,
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

    next: {
      fontSize:18,
      alignSelf:'flex-end',
      marginRight:25,
      fontWeight:'bold'
    },

    textInput: {
      height: 40,
      padding: 10,
      margin: 30, 
      fontSize: 16, 
      borderRadius: 20,
      backgroundColor: 'white'
    },

    profilePicLarge: {
      width:150, 
      alignSelf: 'center',
      height:150,
      marginTop:50,
      borderRadius:75,
      borderColor: Colors.main,
      borderWidth: 2
    }
})
