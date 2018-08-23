import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
