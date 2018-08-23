import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import GroupProfilePicture from './GroupProfilePicture';
import Members from './Members';
import Ratings from './Ratings';
import ContactsIcons from './ContactsIcons';
import {NavigationSingleton} from '../screens/login';

export default class GroupProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        
    }


  render() {
    return (

        <View style={styles.container}>
           <GroupProfilePicture />
           <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{flexDirection:'row'}}>
                    <Members onPress={() => NavigationSingleton.instance.navigate("ListMembers")} members={'9,7k'}/>
                    <Ratings ratings={'9,3/10'}/>
                </View>
                <View style={{marginTop:-15}}>
                    <ContactsIcons />
                </View>
            </View>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
    margin:5,
},

});
