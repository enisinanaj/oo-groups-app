import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import RatingStar from './ratingStar';
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window')

export default class MyGroupsComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            groupname:this.props.groupname,
            rating:this.props.rating,
            role:this.props.role,
            numeroIscritti: this.props.memberCount
         }
    }


  render() {
    
    return (

        <View style={styles.container}>
            <Image source={this.props.smallAvatar} style={[styles.groupCover, {resizeMode: 'cover'}]}></Image>
            
            <View style={{flexDirection: 'column', marginLeft: 15, marginRight: 0, justifyContent: 'space-between'}}>
                <TouchableOpacity  onPress={() => this.props.onPress()} style={{}}>
                    <Text style={{fontSize:18, fontWeight: '500', color: Colors.darkTitle}}>{this.state.groupname}</Text>
                </TouchableOpacity>
                <View>
                    <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={{color: Colors.lighterText, marginRight: 15}}>Membri</Text>
                        <Text style={{color: Colors.darkTitle}}>{this.state.numeroIscritti}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={{color: Colors.lighterText, marginRight: 15}}>Ruolo</Text>
                        <Text style={{color: Colors.darkTitle}}>{this.state.role}</Text>
                    </View>
                </View>
            </View>
            
            <RatingStar style={{position: 'absolute', top: 10, right: 10}} rating={this.state.rating}/>

        </View>
            
    )
}
}
 
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        height:90,
        borderRadius: 20,
        padding: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: Colors.lightGreyBackground
    },
    
    groupCover: {
        borderRadius: 20,
        height: 70,
        width: 70,
        marginVertical: 0,
        marginBottom: 5
    }
})
