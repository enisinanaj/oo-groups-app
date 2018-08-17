import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';

export default class SmallAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }
render(){
    return (
        <View style={{flexDirection:'row'}}>
            <Image
                style={styles.image}
                source={{uri:'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'}}
            />
            <Text style={styles.title}>{this.state.name}</Text>
        </View>
    )
}

}
const styles=StyleSheet.create ({
    image:{
        width:55,
        height:55,
        borderRadius:25,
    },
})