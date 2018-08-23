import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import {NavigationSingleton} from '../screens/login';


export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: this.props.members,           
        }
    }
// number of members in the profile header

  render() {
    return (

        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:20,paddingLeft:10}}>
                {this.state.members}
            </Text>
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <Text>members</Text>
            </TouchableOpacity>
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
