import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';


export default class RatingStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating,
            
        }
    }


  render() {
        const {style = {}} = this.props;
        return (
            <View style={style}>
                <FontAwesome name={'star'} size={26} color={Colors.lighterText}/>
                <Text style={{fontSize:9, position:'absolute', marginTop:8, color:'white',fontWeight:'bold', marginLeft:6}}>{this.state.rating}</Text>
            </View>
        );
  } 
}