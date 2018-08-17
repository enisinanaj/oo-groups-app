import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


export default class ProfileContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                <TouchableOpacity style={{flexDirection:'row', marginRight:10, borderColor:'#ABB2B9',borderRadius:5, width:160, padding:3, paddingLeft:10, borderWidth:1,}}>
                    <FontAwesome style={{marginRight:20,}} name={'facebook'} size={25} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:2, marginRight:10}}>Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row', borderColor:'#ABB2B9', borderRadius:5, width:170, padding:5, paddingLeft:10, borderWidth:1,}}>
                    <FontAwesome style={{marginRight:20,}} name={'linkedin'} size={25} color={'black'}/>
                    <Text style={{fontSize:18, alignSelf:'center',marginTop:2, marginRight:10}}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{flexDirection:'row', borderColor:'#ABB2B9',borderRadius:5, width:170, padding:5, alignSelf:'center',paddingLeft:10, borderWidth:1,}}>
                <FontAwesome style={{marginRight:30,}} name={'envelope-o'} size={25} color={'black'}/>
                <Text style={{fontSize:18, marginTop:2, marginRight:10}}>E-mail</Text>
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    borderBottomWidth:1,
    borderColor:'#CCD1D1',
    padding:20,
    marginBottom:10,
    marginTop:-10,
},

});
