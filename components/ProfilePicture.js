import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <Image style={{width:150, height:150,borderRadius:75}} source={this.props.image}/>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    justifyContent:'center',
},

});
