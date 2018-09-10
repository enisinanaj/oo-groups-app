import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';




export default class SubscribedCard extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row', flex:0.8}}>
                <Image
                    style={{width:30, height:30,borderRadius:15, margin:3, marginRigh:5}}
                    source={this.props.smallprofilepicure}/>
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10, marginRight:3,}}>{this.props.user}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 12, marginTop:10,}}>subscribed to your group</Text>
            </View>
            
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
