import React, {Component} from 'react';
import { StyleSheet, ScrollView,Text, View, TouchableOpacity, Modal} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';



export default class CategorySingleOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
        }

    }

    render() {
        return (

            <View style={{padding: 5, backgroundColor:'white', flexDirection: 'row'}}>     
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={styles.optionsText}>{this.state.category}</Text>
                </TouchableOpacity>
            </View>

        );
    }
  
}




const styles = StyleSheet.create({
    optionsText:{
        fontSize:14,
        color:'#566573',
        alignSelf:'center',
    }
});
