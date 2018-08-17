import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


export default class MenuBarMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
        <TouchableOpacity style={{flexDirection:'row'}}>
            <Entypo style={{marginRight:7}} name={'info'} size={30} color={'black'}/>
            <Text style={{fontSize:18, marginTop:5, marginRight:10}}>info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
            <Feather style={{marginRight:7}} name={'list'} size={30} color={'black'}/>
            <Text style={{fontSize:18, marginTop:5, marginRight:10}}>rules</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
            <Entypo style={{marginRight:7}} name={'picasa'} size={30} color={'black'}/>
            <Text style={{fontSize:18, marginTop:5, marginRight:10}}>media</Text>
        </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    borderTopWidth:1,
    borderColor:'#CCD1D1',
    padding:10,
    justifyContent:'space-between',
},

});
