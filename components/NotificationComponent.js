import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import NotificationIcon from './NotificationIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class NotificationComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render(){
        return (
            <View style={{flexDirection:'row'}}>
                <FontAwesome name={'group'} size={25} color={'gray'} />
                <View style={{position:'absolute', marginLeft:23, marginTop:-5}}>
                    <NotificationIcon notifications={'9'}/>
                </View>
                
            </View>
    )
}

}
const styles=StyleSheet.create ({

})