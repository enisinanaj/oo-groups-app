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
            <TouchableOpacity>
                <MaterialCommunityIcons style={{marginRight:7}} name={'web'} size={25} color={'black'}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome style={{marginRight:7}} name={'envelope-o'} size={23} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather style={{marginRight:7}} name={'instagram'} size={23}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome  style={{marginTop:3, marginRight:7}} name={'facebook-f'} size={23}/>
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    margin:5,
},

});
