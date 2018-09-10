import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import SimpleButton from './SimpleButton';
import Colors from '../constants/Colors';


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
    borderColor:Colors.profileBorder,
    padding:10,
    alignItems:'center',
    
},

});
