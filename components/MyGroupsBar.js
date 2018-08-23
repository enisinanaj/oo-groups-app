import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


export default class MyGroupsBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
  render() {
    return (

        <View style={styles.container}>
            <View style={{justifyContent:'center', width:150}}>
                <Text style={{fontSize:18,fontWeight:'bold', marginRight:10}}>My groups</Text>
            </View>
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <Entypo style={{justifyContent:'flex-end'}} name={this.props.iconName} size={25} color={'gray'}/>
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
    paddingBottom:10,
    flexDirection:'row',
    justifyContent:'space-between'
},

});
