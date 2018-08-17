import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Button} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Terms from './terms';
import { createStackNavigator, props, navigate, navigation } from 'react-navigation';
import SimpleButton from './SimpleButton';
import MediumSimpleButton from './MediumSimpleButton';



export default class WelcomeCard extends React.Component {
  static navigationOptions = {
    title: 'Groups',
  };
    constructor(props) {
        super(props);
    
        this.state = {
            
        }
    }


  render() {
    return (
    <View style={{marginBottom:10}}>
      <Text style={{fontSize:25, marginTop:20, alignSelf:'center'}}>Benvenuto su Groups</Text>
      <Text style={{fontSize:18, marginTop:10, alignSelf:'center'}}>Migliora la tua esperienza</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:15,marginRight:15, marginLeft:15}}>
        <MediumSimpleButton title={'Cerca gruppi'}/>
        <MediumSimpleButton title={'Personalizza profilo'}/>
      </View>



    </View>
    );
  }
  
}




const styles = StyleSheet.create({
  
});
