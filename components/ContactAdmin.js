import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import GroupProfilePicture from './GroupProfilePicture';
import Members from './Members';
import Ratings from './Ratings';
import MediumSimpleButton from './MediumSimpleButton';
import {NavigationSingleton} from '../screens/login';

export default class ContactAdmin extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <GroupProfilePicture groupProfilePicture={this.props.groupProfilePicture}/>
                <View style={{flexDirection:'column', marginTop:10}}>
                    <View style={{flexDirection:'row'}}>
                        <Members onPress={() => NavigationSingleton.instance.navigate("ListMembers")} members={'9,7k'}/>
                        <Ratings ratings={'9,3/10'}/>
                    </View>
                    <MediumSimpleButton  title={'Chat admin'}/>
                </View>
            </View>
        );
    }  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
    backgroundColor:'transparent',
    marginTop:-10,
},

});
