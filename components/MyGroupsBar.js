import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';


export default class MyGroupsBar extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
  render() {
    return (
        <View style={this.props.style}>
            <View style={[styles.container, this.props.titleStyle]}>
                <View>
                    <Text style={{fontSize:18, color: Colors.darkTitle}}>{this.props.title}</Text>
                </View>
                {this.props.rightViewVisible == undefined || ( this.props.rightViewVisible != undefined && this.props.rightViewVisible ) ? 
                    <TouchableOpacity onPress={() => this.props.onPress()} style={{flexDirection: 'row'}}>
                        <Text style={{marginRight: 5, fontSize: 11, color: Colors.lighterText, marginTop: 4}}>{this.props.label}</Text>
                        <Entypo style={{justifyContent:'flex-end'}} name={this.props.iconName} size={22} color={Colors.darkGrey}/>
                    </TouchableOpacity>
                : null}
            </View>
            
            {this.props.children}
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection:'row',
    justifyContent:'space-between'
},

});
