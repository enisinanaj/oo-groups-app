import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: this.props.members,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:20,paddingLeft:10}}>
                {this.state.members}
            </Text>
            <Text>members</Text>
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
