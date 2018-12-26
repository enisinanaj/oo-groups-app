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
            <View style={styles.container}>
                <Text style={{fontSize:20, fontWeight:'bold', alignSelf:'center', marginTop:5}}>Me out of groups</Text>  
                <Text style={{fontSize:17, marginTop:5}}>{User.getInstance().user.bio}</Text>        
            </View>
        );
    }  
}

const styles = StyleSheet.create({
 
    container:{
        flexDirection:'column',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#CCD1D1',
        padding:10,
        marginTop:10,
    },

});
