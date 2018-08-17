import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:20}}>
                {this.state.ratings}
            </Text>
            <Text style={{marginLeft:8}}>rating</Text>
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
