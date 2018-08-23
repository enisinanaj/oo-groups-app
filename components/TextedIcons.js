import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


export default class TextedIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            color:this.props.color,
            size=this.props.size,
            title=this.props.title,
        }
    }


  render() {
    return (

        <TouchableOpacity style={{flexDirection:'row'}}>
            <Entypo style={{marginRight:7}} name={'info'} size={30} color={'black'}/>
            <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Post request</Text>
        </TouchableOpacity>
        

    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    borderTopWidth:1,
    borderColor:'#CCD1D1',
    padding:10,
    justifyContent:'space-between',
},

});
