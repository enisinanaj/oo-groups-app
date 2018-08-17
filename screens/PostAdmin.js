import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



export default class PostAdmin extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <Image
                style={{width:30, height:30, margin: 2,borderRadius:15}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
            />
            <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10}}>Leandrolombardo</Text>
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
