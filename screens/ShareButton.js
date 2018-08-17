import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleButton from './SimpleButton';
import MediumSimpleButton from './MediumSimpleButton';


export default class ShareButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


    toggleModal() {
        this.setState({modalVisible: !this.state.modalVisible})
    }


  render() {
    return (

        <View style={styles.container}>
            <SimpleButton title={'Share with group'} onPress={() => this.toggleModal()}>
               
            </SimpleButton>
         </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#CCD1D1',
    padding:10,
    alignItems:'center',
},

});
