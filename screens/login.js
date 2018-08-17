import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


export class  NavigationSingleton {
    static instance;

    static getInstance() {
        return instance
    }
}


export default class Login extends Component {
    static navigationOptions = {
        header: 
          null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        NavigationSingleton.instance = this.props.navigation;
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <View style={styles.logo}>
                <FontAwesome  style={{position:'absolute', marginLeft:35, marginTop:35}} name={'group'} size={90} color={'white'}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Groups</Text>
            </View>
        </View>
        <View style={styles.socialContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Terms')}>
                <View style={styles.googleButton}>
                    <FontAwesome style={{marginTop:10}} name={'google'} size={30} color="white" />
                    <Text style={styles.buttonText}> Accedi con Google</Text>
                </View>
            </TouchableOpacity>

            <Text style={{color:'#139EE3', fontSize: 20, marginTop:5,alignSelf:'center' ,marginBottom:10}}>oppure</Text>

            <TouchableOpacity>
                <View style={styles.InstagramButton}>
                    <Feather style={{marginTop:10}} name={'instagram'} size={30} color="white" />
                    <Text style={styles.buttonText}> Accedi con Instagram</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.facebookButton}>
                    <EvilIcons  style={{marginTop:8}} name={'sc-facebook'} size={45} color="white" />
                    <Text style={styles.buttonText}> Accedi con Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.twitterButton}>
                <Entypo style={{marginTop:10, marginLeft:5}} name={'twitter'} size={30} color="white" />
                    <Text style={styles.buttonText}> Accedi con Twitter</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-30,
  },
 
logoContainer:{
    flexDirection:'column', 
    marginTop:50,
   alignSelf:'center',
},

logo: {
    backgroundColor:'#139EE3',
    height:160,
    width:160,
    borderRadius:85,
},

titleContainer:{
    marginTop:25,
    marginLeft:27,
},
title: {
    fontSize: 35,
    color:'#139EE3',
},
socialContainer:{
    flexDirection:'column',
    marginTop:50,
},
googleButton:{
    backgroundColor:'#F92E28',
    flexDirection:'row',
    paddingLeft:20,
    width:320,
    height:50,
    borderRadius:5,
    color:'white',
    marginBottom:10,
},

InstagramButton:{
    backgroundColor:'#E68722',
    flexDirection:'row',
    paddingLeft:20,
    width:320,
    height:50,
    borderRadius:5,
    color:'white',
    marginBottom:15,
},
facebookButton:{
    backgroundColor:'#13329E',
    flexDirection:'row',
    paddingLeft:12,
    width:320,
    height:50,
    borderRadius:5,
    color:'white',
    marginBottom:15,
},
twitterButton:{
    backgroundColor:'#43BBF7',
    flexDirection:'row',
    paddingLeft:18,
    width:320,
    height:50,
    borderRadius:5,
    color:'white',
    marginBottom:10,
},
buttonText:{
    color:'white',
    fontSize:20,
    marginLeft:30,
    marginTop:10,
},
 
});
