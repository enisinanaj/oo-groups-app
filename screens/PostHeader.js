import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';



export default class PostHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            category: this.props.category,
            date:this.props.date,
            image:{uri: this.props.image}
        }

    }


  render() {
    return (
    
    <View style={styles.container}>
        <Image
            style={{width:55, height:55, margin: 10,borderRadius:28}}
            source={{uri:'https://lagiornatasportiva.it/wp-content/uploads/2018/02/cristiano-ronaldo-net-worth.jpg'}}   />
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:285}}>
                <Text style={{fontWeight:'bold',fontSize:20, flex:1, marginTop:10}}>{this.state.name}</Text>
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                    <Entypo style={{marginLeft:20, marginTop:3}} name={'chevron-small-down'} size={30} color={'gray'} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.category}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>{this.state.category}</Text> 
                </TouchableOpacity>
                <View style={{flexDirection:'row', paddingTop:2}}>
                    <Entypo name={'dot-single'} size={20} color={'black'} />
                    <Text style={{color:'gray', fontSize:16}}>{this.state.date}</Text>
                </View>
            </View>
        </View>
    </View>
   
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
},
category:{
    borderRadius:3,
    borderWidth:1,
    borderColor:'#D5D8DC',
    height:25,
    width:120,
    justifyContent:'center',
    alignItems:'center',
},
});
