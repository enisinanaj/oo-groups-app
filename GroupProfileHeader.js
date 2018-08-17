import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class GreoupProfileHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            
            <Text>ratings</Text>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    padding:10,
    margin:5,
},

});
