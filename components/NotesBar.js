import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import { colors } from 'react-native-elements';


export default class NotesBar extends React.Component {
    constructor(props) {
        super(props);
        
    }


  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection:'row', alignSelf:'center', justifyContent: 'center'}}>
                <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style={{fontSize:14, marginRight:10}}>NOTES</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    borderTopWidth:1,
    borderColor: '#f5f5f5',
    borderBottomWidth: 1,
    padding:10,
},

});
