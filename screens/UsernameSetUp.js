import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import Colors, { Shadow } from '../constants/Colors';
import User from '../controllers/user/instance'

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

      let user = User.getInstance();
  
      this.state = { 
        username: user.username,
      }
  }

  updateAndGoNext() { 

    var username = {
      username: this.state.username
    }

    fetch(APIConsts.apiEndpoint + "/utente/" + User.getInstance().user["_id"], {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(username)
    }).then(() => {
        this.props.navigation.navigate('UsernameSetUp');
    })

    //TODO: update user profile photo in chain after username, and only then go to next view.
  }

  render() {
    
    return (
      <View style={styles.container}>
          <Text style={{fontSize:18, marginTop: 20, marginLeft:20, marginRight: 20, fontWeight:'bold', color: 'black'}}>Scegli un nome utente</Text>
          <Text style={{fontSize:13, marginTop:4, marginLeft: 20, marginRight: 20, color: 'black'}}>Il nome utente è il tuo identificativo all'interno di Groups</Text>
          <Image
            style={[styles.profilePicLarge]}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
          />
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
      borderRadius:75
    }
})
