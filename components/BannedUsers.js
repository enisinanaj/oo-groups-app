import React, {Component} from 'react';
import { StyleSheet, Width,Text, Modal, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionsOnMembers from './ActionsOnMember';


export default class BannedUsers extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    

  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={{width:30, height:30,borderRadius:15, marginTop:10, margin:3}}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
                />
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{fontWeight:'bold', fontSize: 13, marginTop:20, marginLeft:10,}}>{this.props.user}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => this.props.onPress()} style={{ height:30,alignSelf:'flex-end', marginRight:10}}>
                    <Text style={{fontSize:13, color:'red'}}>Unblock User</Text>
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    height:45,
    backgroundColor:'white',
    justifyContent:'space-between',
},

options:{
    alignSelf:'center'
},

});
