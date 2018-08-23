import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TextInput,TouchableOpacity, Button} from 'react-native';
import GroupCard from '../components/GroupCard';
import OpenGroup from '../components/OpenGroup';
import {NavigationSingleton} from './login'

import { StackActions, NavigationActions } from 'react-navigation';


export default class GroupSuggestion extends React.Component {
    static navigationOptions = {
        header: null
      };
    
    constructor(props) {
        super(props);
    
        this.state = { 
            
        }
    }

    goToProtectedViews() {
        NavigationSingleton.instance.navigate("ProtectedViews");
    }


  render() {
    
    return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{marginTop:10,padding:10}}>
            <Text style={{fontSize:20}}>Ecco i gruppi che potrebbero incontrare il tuo interesse </Text>
        </View>
        <ScrollView style={styles.container}>
      
            <GroupCard />
            <OpenGroup name={'RockandRoll'}/>
            <GroupCard/>

        </ScrollView>
        <Text style={{marginHorizontal:25, paddingTop:10,fontSize:14}}> Potrai trovare i gruppi anche successivamente nella sezione ricerca</Text>
        <View style={{flexDirection:'row', height:50, paddingHorizontal:20 ,justifyContent:'space-between'}}>
            <TouchableOpacity>
                <Text style={styles.buttons}>SALTA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToProtectedViews()}>
                <Text style={styles.buttons}>AVANTI</Text>
            </TouchableOpacity>
          </View>
    </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      backgroundColor: 'white',
      paddingBottom:10,
    },
    buttons:{
        fontSize:20, 
        marginTop: 10, 
        fontWeight:'bold', 
        color:'#2E86C1'
    },

})
