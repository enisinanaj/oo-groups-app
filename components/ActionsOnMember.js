import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Modal} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';



export default class ActionsOnMembers extends React.Component {
    constructor(props) {
        super(props);

    }

  render() {
    return (

        <View style={{marginTop: 22, backgroundColor:'white', marginTop:150, width:290, borderWidth:1, borderRadius:3,borderColor:'#AEB6BF', alignSelf:'center'}}>     
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionsText}>Elimina</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionsText}>Blocca membro</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Text style={styles.optionsText}>Metti Admin</Text>
            </TouchableOpacity>
            
        </View>

);
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
},
smallContainer:{
    borderWidth:1,    
},

options:{
    height:40,
    borderBottomWidth:1,
    borderColor:'#E5E8E8',
    paddingTop:10,
    
},
optionsText:{
    fontSize:18,
    color:'#566573',
    alignSelf:'center',
},
});
