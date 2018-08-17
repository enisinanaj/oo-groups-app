import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <Image
                style={{width:170, height:170,borderRadius:85}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmwLH-qUmZDNh0NLqNhFatyGHuKFwnpe_palgWRewaAg8UHIXT'}}
            />
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    justifyContent:'center',
},

});
