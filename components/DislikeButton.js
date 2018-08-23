import React, {Component} from 'react';
import { StyleSheet,Text, height, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';



export default class DislikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
          
    }

    dislikeButtonActivity = () =>{
    
        if(this.state.active == true)
        {
            this.setState({active: false})
        }
        else if (this.state.active == false)
        {
            this.setState({active: true})
        }
    }


  render() {
    return (
        <View>
            <TouchableOpacity onPress={() => this.props.onPress()} style={styles.container}>
            <Feather style={this.props.style} name={'thumbs-down'} size={25} color="#ABB2B9" />
                <Text style={this.props.textStyle}>Dislike</Text>
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
