import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


export default class MyPostsBar extends React.Component {
    constructor(props) {
        super(props);
        
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{justifyContent:'center', width:150}}>
                <Text style={{fontSize:18,fontWeight:'bold', marginRight:10}}>My posts</Text>
            </View>
            <TouchableOpacity>
                <Entypo style={{justifyContent:'flex-end'}}name={'chevron-up'} size={25} color={'gray'}/>
            </TouchableOpacity>
       </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    paddingLeft:110,
    paddingRight:20,
    borderBottomWidth:1, 
    borderColor:'#CCD1D1',
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between'
},

});
