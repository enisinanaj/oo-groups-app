import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class GroupProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <Image
                style={{width:100, height:100, margin: 2,borderRadius:50}}
                source={this.props.groupProfilePicture}
            />
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
