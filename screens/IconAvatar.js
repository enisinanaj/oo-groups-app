import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import NotificationIcon from './NotificationIcon';

export default class IconAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,           
        }
    }
render(){
    return (
        <View style={{flexDirection:'row'}}>
            <Image
                style={styles.image}
                source={{uri:'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'}}
            />
            
        </View>
    )
}

}
const styles=StyleSheet.create ({
    image:{
        width:30,
        height:30,
        borderRadius:15,

    },
})