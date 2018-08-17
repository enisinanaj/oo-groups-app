import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



export default class CommentData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: this.props.datas,
        }
    }


  render() {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <EvilIcons style={{marginTop:3,}} name={'comment'} size={35} color="#ABB2B9" />
                <Text style={{color:'#5D6D7E', fontSize:15,marginLeft:5, marginTop:9}}>{this.state.datas}</Text>
            </TouchableOpacity>
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
