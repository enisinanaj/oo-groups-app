import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


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
    borderColor:'#CCD1D1',
    padding:10,
},

});
