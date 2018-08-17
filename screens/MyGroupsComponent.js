import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import {StackNavigator } from 'react-navigation';
import SmallAvatar from './SmallAvatar';
import RatingStar from './ratingStar';
import AdminView from './AdminView';



export default class MyGroupsComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            groupname:this.props.groupname,
            rating:this.props.rating,
            role:this.props.role,
         }
    }


  render() {
    
    return (

        <View style={styles.container}>
            
            <View style={{marginTop:5,flexDirection:'row', marginLeft:5, flex:0.6}}>
                <SmallAvatar/>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('AdminView')} style={{alignSelf:'center',marginLeft:5}}>
                    <Text style={{fontSize:14, marginTop:-5}}>{this.state.groupname}</Text>
                </TouchableOpacity>
            </View>
            <View style={{borderLeftWidth:1, flex:0.2, paddingTop:5, borderRightWidth:1, borderColor:'#CCD1D1', paddingLeft:15}}>
                <RatingStar rating={this.state.rating}/>
            </View>
            <View style={{alignSelf:'center',flex:0.2, paddingLeft:30}}>
                <Text>{this.state.role}</Text>
            </View>

        </View>
            
    )
}
}
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:60,
        borderBottomWidth:1, 
        borderColor:'#CCD1D1',
    },
    
})
