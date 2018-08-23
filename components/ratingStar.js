import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';


export default class RatingStar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: this.props.rating,
            
        }
    }


  render() {
    return (

        <View>
            <FontAwesome style={{justifyContent:'flex-end'}}name={'star'} size={50} color={'black'}/>
            <Text style={{fontSize:18, position:'absolute', marginTop:13, color:'white',fontWeight:'bold', marginLeft:13}}>{this.state.rating}</Text>
       </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{

},

});
