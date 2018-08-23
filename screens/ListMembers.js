import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MemberListCard from '../components/memberListCard';



export default class ListMembers extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <MemberListCard  user={'Lorem Ipsum'}/>
            <MemberListCard  user={'John Smith'}/>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    padding:5,
    flex:1,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#E5E8E8',
},

});
