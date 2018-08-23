import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';



export default class MemberListCard extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={{width:30, height:30,borderRadius:15, margin:3, marginRigh:5}}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
                />
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10, marginLeft:10,}}>{this.props.user}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{alignSelf:'flex-end',marginRight:10}}>
                <Entypo  name={'dots-three-horizontal'} size={20} color={'gray'}/>
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    height:45,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#E5E8E8',
    justifyContent:'space-between',
},

});
