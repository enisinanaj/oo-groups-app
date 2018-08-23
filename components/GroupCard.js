import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';



export default class GroupCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            image:{uri: this.props.image},
            name: this.props.name,
            genre:this.props.genre,
            members:this.props.members,
            visibility:this.props.visibility,
            follow:this.props.follow,
            requested: false,
         }
    }

    Requested(){
        this.setState({requested: true})
    } 
    renderRequestedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <MaterialIcons style={{marginTop:5}} name={'done'} size={25} color="#3195F9" />
                <Text style={styles.addUserContainer}>Requested</Text>
            </View>
        )
    }
    unrequestedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <Entypo style={{marginTop:5}} name={'add-user'} size={20} color="#3195F9" />
                <Text style={styles.addUserContainer}>Fai richiesta</Text>
            </View>
        )
    }
  render() {
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.image}
                    source={{uri:'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'}}
                />
                <Text style={styles.title}>Averagejuventinogroup</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                <View>
                    <View style={{flexDirection:'row', marginBottom:15}}>
                        <Entypo style={{marginTop:10}} name={'pie-chart'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>Calcio</Text>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <Entypo style={{marginTop:10}} name={'eye'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>Chiuso</Text>
                    </View>

                </View>

                <View >
                    <View style={{flexDirection:'row', marginBottom:15}}>
                        <FontAwesome style={{marginTop:10}} name={'group'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>8.9k</Text>
                    </View>
                    <TouchableOpacity  disabled={this.state.requested==true} onPress={() => this.Requested()} style={{flexDirection:'row', paddingLeft:10, paddingTop:4, width:170, height:40, borderRadius:5, borderColor:'#3195F9', borderWidth: 1}}>
                    {this.state.requested? this.renderRequestedButton() : this.unrequestedButton()}
                    </TouchableOpacity>
                    
                </View>
            </View>    
        </View>

                
        
    )
}
}
 
const styles = StyleSheet.create({
    container: {
        height:180, 
        padding:15,
        margin:10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },

    image:{
        height:50,
        width:50,
        borderRadius:25,
    },
    title:{
        fontSize:18, 
        color:'black',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
    },
    iconCouples:{
        fontSize:16, 
        color:'black',
        marginLeft:10,
        marginTop:15,
        margin:10
    },
    addUserContainer:{
        fontSize:16, 
        color:'black',
        marginLeft:20,
        marginTop:5,
    },
})
