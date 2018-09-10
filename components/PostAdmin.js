import React, {Component} from 'react';
import { StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';

export default class PostAdmin extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View>
            <TouchableOpacity style={styles.container}>
                <Image
                    style={{width:30, height:30, margin: 2,borderRadius:15}}
                    source={this.props.postAdminAvatar}
                />
                <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10}}>{this.props.postAdminName}</Text>
            </TouchableOpacity>
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
