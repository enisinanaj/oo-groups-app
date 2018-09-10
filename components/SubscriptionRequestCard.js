import React, {Component} from 'react';
import { StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';




export default class SubscribeRequestCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user: this.props.user,
            requestAccepted: false,
            requestDeclined: false,
        }
    }
renderButtons(){
    return(
        <View style={{flexDirection:'row',}}>
            <TouchableOpacity style={{height:30, width:70, borderRadius:5, backgroundColor: 'white', marginRight:10}}>
                <Text style={{fontSize: 13, alignSelf:'center', color: Colors.main,marginTop:5}}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:30, width:70, borderRadius:5, backgroundColor: 'white', marginRight:10}}>
                <Text style={{fontSize: 13, alignSelf:'center', color: Colors.alert, marginTop:5}}>Decline</Text>
            </TouchableOpacity>
        </View>
    )
}

renderAccepted(){
    return(
        <View style={{flexDirection:'row',}}>
            <Text>
                Accepted
            </Text>
        </View>
    )
}
renderDeclined(){
    return(
        <View style={{flexDirection:'row',}}>
            <Text>
                Declined
            </Text>
        </View>
    )
}

  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row', flex:1, }}>
                <Image
                    style={{width:30, height:30,borderRadius:15, margin:3, marginRight:5}}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
                />
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10, marginRight:3,}}>{this.props.user}</Text>
                </TouchableOpacity>
            </View>
                
            {this.renderButtons()}
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:5,
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#E5E8E8',
    
},

});
