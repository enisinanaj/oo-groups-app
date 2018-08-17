import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Button} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Terms from './terms';
import { createStackNavigator, props, navigate, navigation } from 'react-navigation';



export default class MediumSimpleButton extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
        }
    }


  render() {
    return (
      
        <TouchableOpacity>
            <View style={styles.simpleButton}>
                <Text style={styles.buttonText}> {this.state.title}</Text>
            </View>
        </TouchableOpacity>
    );
  }
  
}




const styles = StyleSheet.create({
 
simpleButton:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
    width:170,
    height:30,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
},
buttonText: {
    fontSize:15,
},
});
