import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';




export default class UserCommentCard extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <Image
                style={{width:30, height:30,borderRadius:15, margin:3, marginRigh:5}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
            />
            <View style={{flexDirection:'column', backgroundColor:'#F2F4F4', borderRadius:3}}>
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:5, marginRight:10,}}>{this.props.user}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 12, marginTop:5,}}>{this.props.comment}</Text>
            </View>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:5,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#E5E8E8',

},

});
