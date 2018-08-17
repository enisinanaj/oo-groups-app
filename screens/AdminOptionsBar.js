import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import NotificationIcon from './NotificationIcon';


export default class AdminOptionsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <FontAwesome style={{marginRight:7}} name={'file-text-o'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Post request</Text>
                        <View style={{position:'absolute', marginLeft:15, marginTop:-5}}>
                            <NotificationIcon notifications={'3'}/>
                        </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <FontAwesome style={{marginRight:7}} name={'user-circle-o'} size={35} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Entry request</Text>
                        <View style={{position:'absolute', marginLeft:20, marginTop:-5}}>
                            <NotificationIcon notifications={'9'}/>
                        </View>
                </TouchableOpacity>
                
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', paddingRight:35}}>
                <TouchableOpacity style={{flexDirection:'row'}}>
                    <Feather style={{marginRight:7}} name={'alert-circle'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Reports</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection:'row',}}>
                    <Feather style={{marginRight:7}} name={'settings'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Settings</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    borderTopWidth:1,
    borderColor:'#CCD1D1',
    padding:20,
    marginBottom:10,
    marginTop:-10,
},

});
