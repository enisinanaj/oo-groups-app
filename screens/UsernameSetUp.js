import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';



export default class UsernameSetUp extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#F5FCFF',
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
          inputValue:'',
        }
    }


  render() {
    
    return (
      <View style={styles.container}>
          <Image
            style={{width:150, borderColor:'#2E86C1', borderWidth:2, alignSelf:'center',height:150, marginTop:50, borderRadius:75}}
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
        />
          <Text style={{fontSize:25, marginTop: 20, marginLeft:45, fontWeight:'bold', color:'#2E86C1'}}>Scegli un nome utente</Text>
          <Text style={{fontSize:18, marginTop:10, marginLeft:45,  color:'#2E86C1'}}>Il nome utente è il tuo identificativo all'interno di Groups</Text>
          <TextInput
            style={{height: 50, padding:3, paddingLeft:10,marginLeft:30, fontSize:18, marginRight:30, marginTop:30, borderColor: '#2E86C1', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder={'Nome Utente'}
            placeholderTextColor={'#A9CCE3'}
          />
          <TouchableOpacity disabled={this.state.InputValue==''} onPress={() => this.props.navigation.navigate('ChooseInterests')}>
            <Text style={{fontSize:25, marginTop: 20, alignSelf:'flex-end',marginRight:25, fontWeight:'bold', color:'#2E86C1'}}>Avanti</Text>
          </TouchableOpacity>
      </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
})
