import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';

export default class NotificationIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: this.props.notifications,           
        }
    }
render(){
    return (
        <View style={styles.container}>
            <Text style={{color:'white'}}>{this.state.notifications}</Text>
            
        </View>
    )
}

}
const styles=StyleSheet.create ({
    container:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor:'#3498DB',
        color:'white',
        alignItems:'center',
        zIndex: 99,
    },
})