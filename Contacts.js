import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export default class ContactsIcons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <Text style={{fontSize:16, marginTop:5, marginRight:10}}>Contacts</Text>
            <MaterialCommunityIcons style={{marginRight:7}} name={'web'} size={30} color={'black'}/>
            <FontAwesome style={{marginRight:7}} name={'envelope-o'} size={28} />
            <Feather style={{marginRight:7}} name={'instagram'} size={28}/>
            <FontAwesome  style={{marginTop:3, marginRight:7}} name={'facebook-f'} size={26}/>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
    margin:5,
},

});
