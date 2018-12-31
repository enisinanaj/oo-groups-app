import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import NotificationIcon from './NotificationIcon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


export default class NotificationComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render(){
        return (
            <View style={{flexDirection:'row'}}>
                <SimpleLineIcons name={'bulb'} size={25} color={this.props.color} />
                <View style={{position:'absolute', marginLeft:23, marginTop:-5}}>
                    <NotificationIcon notifications={'9'}/>
                </View>
                
            </View>
    )
}

}
const styles=StyleSheet.create ({

})