import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import User from '../controllers/user/instance';



export default class BioBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }

    render() {
        return (
            <Text style={[styles.text, this.props.style]}>{User.getInstance().user.bio}</Text>        
        );
    }  
}

const styles = StyleSheet.create({

    text: {
        fontSize:14,
        color: '#8b8b8b',
        textAlign: 'center'
    }

});
