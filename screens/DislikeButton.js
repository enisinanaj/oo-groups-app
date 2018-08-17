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
            <TouchableOpacity onPress={this.dislikeButtonActivity} style={styles.container}>
            <Feather style={this.state.active== true? styles.activeThumb : styles.inactiveThumb} name={'thumbs-down'} size={25} color="#ABB2B9" />
                <Text style={this.state.active== true? styles.activeText : styles.inactiveText}>Dislike</Text>
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

inactiveThumb:{
    color:'#ABB2B9',
    marginTop:2,
},
activeThumb:{
    color:'#5DADE2',
    marginTop:2,
},
inactiveText:{
    color:'#5D6D7E',
    fontSize:15,
    marginLeft:5,
    marginTop:2,
},
activeText:{
    color:'#5DADE2',
    fontSize:15,
    marginLeft:5,
    marginTop:2,
},
});
