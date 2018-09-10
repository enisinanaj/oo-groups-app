import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';



export default class MyGroupsCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            image:{uri: this.props.image},
            name: this.props.name,
            genre:this.props.genre,
            members:this.props.members,
            visibility:this.props.visibility,
            follow:this.props.follow,
            subscribed: true,
            accessibility: this.props.accessibility
         }
    }

    subscribe(){
        this.setState({subscribed: false})
    } 
    renderSubscribedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <MaterialIcons style={{marginTop:5}} name={'done'} size={25} color="#3195F9" />
                <Text style={styles.subscribe}>Iscritto</Text>
            </View>
        )
    }
    renderUnsubscribedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <Entypo style={{marginTop:5}} name={'add-user'} size={20} color="#3195F9" />
                <Text style={styles.subscribe}>Iscriviti</Text>
            </View>
        )
    }

  render() {
    
    return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.image}
                    source={this.props.groupProfilePicture}
                />
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
            <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between'}}>
                <View>
                    <View style={{flexDirection:'row', marginBottom:15}}>
                        <Entypo style={{marginTop:10}} name={'pie-chart'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>{this.props.groupCategory}</Text>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <Entypo style={{marginTop:10}} name={'eye'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>{this.props.accessibility}</Text>
                    </View>

                </View>

                <View >
                    <View style={{flexDirection:'row', marginBottom:15}}>
                        <FontAwesome style={{marginTop:10}} name={'group'} size={30} color="#3195F9" />
                        <Text style={styles.iconCouples}>10.9k</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.subscribe()} style={{flexDirection:'row', paddingLeft:10, paddingTop:4, width:170, height:40, borderRadius:5, borderColor:'#3195F9', borderWidth: 1}}>
                        {this.state.subscribed? this.renderSubscribedButton() : this.renderUnsubscribedButton()}
                    </TouchableOpacity>
                </View>
            </View>    
        </View>

                
        
    )
}
}
 
const styles = StyleSheet.create({
    container: {
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
    subscribe:{
        fontSize:16, 
        color:'black',
        marginLeft:20,
        marginTop:5,
    },
})
