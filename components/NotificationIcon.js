import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{color:'white'}}>{this.state.notifications}</Text>
            </View>
        </View>
    )
}

}
const styles=StyleSheet.create ({
    container:{
        width:20,
        height:20,
        borderRadius:10,
        backgroundColor: Colors.main,
        color:'white',
        alignItems:'center',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 99,
    },
})