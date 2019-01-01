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
        <View style={[styles.container, style]}>
            {/* <FontAwesome name={'circle'} size={26} color={Colors.lighterText}/> */}
            <View style={styles.innerContainer}>
                <Text style={{fontSize:9, color:'white',fontWeight:'bold'}}>{this.state.rating}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lighterText,
        borderRadius: 11,
        width: 22,
        height: 22,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})