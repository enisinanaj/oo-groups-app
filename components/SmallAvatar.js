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
                source={this.props.smallAvatar}
            />
            <Text style={styles.title}>{this.state.name}</Text>
        </View>
    )
}

}
const styles=StyleSheet.create ({
    image:{
        width:45,
        height:45,
        borderRadius:22,

    },
})