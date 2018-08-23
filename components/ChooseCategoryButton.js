import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Button} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Terms from './terms';
import { createStackNavigator, props, navigate, navigation } from 'react-navigation';
import DropdownMenu from 'react-native-dropdown-menu';



export default class ChooseCategoryButton extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            text:this.props.text,
            data: this.props.data,
        }
    }

    render() {
        var data = [
            ["Category", "Juventus", "Calcio", "Champions Leage", "Mondiale"]
        ];
        return (
          <View style={{flex: 1}}>
            <View style={{height: 64}} />
            <Text>Category: </Text>
            <DropdownMenu
              style={{flex: 1, width: 100}}
              bgColor={'white'}
              tintColor={'#3498DB'}
              activityTintColor={'#3498DB'}
              // arrowImg={}      
              // checkImage={}   
              // optionTextStyle={{color: '#333333'}}
              // titleStyle={{color: '#333333'}} 
              // maxHeight={300} 
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
            >
    
              <View style={{flex: 1}}>
                <Text>
                  Category: {this.state.text}
                </Text>
              </View>
    
            </DropdownMenu>
          </View>
        );
      }
      
//   render() {
//     return (
      
//         <TouchableOpacity>
//             <View style={styles.simpleButton}>
//                 <Text style={styles.buttonText}> {this.state.title}</Text>
//             </View>
//         </TouchableOpacity>
//     );
//   }
  
}




const styles = StyleSheet.create({
 
simpleButton:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
    width:170,
    height:30,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
},
buttonText: {
    fontSize:15,
},
});
