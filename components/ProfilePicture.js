import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
        <View style={styles.container}>
            <View style={{width: 130, height:130, backgroundColor: 'rgba(250,250,250, 0.4)', padding: 5, borderRadius: 64}}>
                <Image style={{width:120, height:120, borderRadius:60}} source={this.props.image}/>
            </View>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    justifyContent:'center',
    flexDirection: 'row'
},

});
