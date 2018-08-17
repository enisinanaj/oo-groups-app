import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator, props, navigate, navigation } from 'react-navigation';
import SimpleButton from './SimpleButton';
import MediumSimpleButton from './MediumSimpleButton';



export default class EmptyProfile extends React.Component {
  static navigationOptions = {
    title: 'Groups',
  };
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
        }
    }


  render() {
    return (
    <View style={styles.container}>
      <Text style={{fontSize:25, marginTop:20, alignSelf:'center'}}>Benvenuto su Groups</Text>
      <Text style={{fontSize:17, marginTop:10,marginHorizontal:20 ,alignSelf:'center'}}>Al momento non sei iscritto a nessun gruppo, o gli admin dei gruppi non hanno ancora accettato la tua richiesta.</Text>
      <Text style={{fontSize:17, marginTop:30, alignSelf:'center'}}>Non perdere tempo, cerca altri gruppi</Text>
      <View style={{margin:15}}>
        <SimpleButton title={'Cerca groupi'}/>
      </View>
      <Text style={{fontSize:17, marginTop:20, alignSelf:'center'}}>Non perdere tempo, cerca altri gruppi</Text>
      <View style={{margin:15}}>
        <SimpleButton title={'Personalizza profilo groupi'}/>
      </View>
    </View>
    );
  }
  
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },

});
