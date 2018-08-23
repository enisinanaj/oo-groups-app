import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
          
    }

    


  render() {
    return (
        <View>
            <TouchableOpacity onPress={() => this.props.onPress()} style={styles.container}>
                <Feather style={this.props.style} name={'thumbs-up'} size={25} color={"#ABB2B9"} />
                <Text style={this.props.textStyle}>Like</Text>
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
