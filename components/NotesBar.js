import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';


export default class NotesBar extends React.Component {
    constructor(props) {
        super(props);
        
    }


  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:'row', alignSelf:'center'}}>
                <Text style={{fontSize:18, marginTop:5, marginRight:10}}>notes</Text>
            </TouchableOpacity>
         </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:Colors.profileBorder,
    padding:10,
},

});
