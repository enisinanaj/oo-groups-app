import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';




export default class NotificationCard extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row', flex:0.8}}>
                <Image
                    style={{width:30, height:30,borderRadius:15, margin:3, marginRight:5}}
                    source={this.props.smallprofilepicture}
                />
                <TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:10, marginRight:3,}}>{this.props.user}</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 12, marginTop:10,}}>{this.props.activityType} your post</Text>
            </View>
            <View style={{flex:0.2, alignSelf:'flex-end',}}>
                <TouchableOpacity>
                    <Image
                        style={{width:30,alignSelf:'flex-end',height:30, margin:5}}
                        source={this.props.postImage}
                    />
                </TouchableOpacity>
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
