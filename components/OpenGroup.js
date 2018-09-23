import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors, { Shadow } from '../constants/Colors';



export default class OpenGroup extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            image:{uri: this.props.image},
            name: this.props.name,
            genre:this.props.genre,
            members:this.props.members,
            visibility:this.props.visibility,
            follow:this.props.follow,
            subscribed: false,
         }
    }

    subscribe(){
        this.setState({subscribed: true})
    } 
    renderSubscribedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <MaterialIcons style={{marginTop:0, marginRight: 5}} name={'done'} size={16} color={Colors.darkBorder} />
                <Text style={styles.subscribe}>Iscritto</Text>
            </View>
        )
    }
    renderUnsubscribedButton(){
        return(
            <View style={{flexDirection:'row', paddingLeft:10, paddingTop:2,}}>
                <Entypo style={{marginTop:0, marginRight: 5}} name={'plus'} size={17} color={Colors.darkBorder} />
                <Text style={styles.subscribe}>Iscriviti</Text>
            </View>
        )
    }

  render() {
    
    return (
        <View style={[styles.container, Shadow.cardShadow]}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={styles.image}
                    source={{uri:'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'}}
                />
                <Text style={styles.title}>{this.state.name}</Text>
            </View>
            <View style={{flexDirection:'column', marginTop:10, justifyContent:'space-between'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <Entypo style={{marginTop:10}} name={'pie-chart'} size={22} color={Colors.darkBorder} />
                        <Text style={styles.iconCouples}>Musica</Text>
                    </View>
                    
                    <View style={{flexDirection:'row'}}>
                        <Entypo style={{marginTop:10}} name={'eye'} size={22} color={Colors.darkBorder} />
                        <Text style={styles.iconCouples}>Aperto</Text>
                    </View>

                    <View style={{flexDirection:'row', marginBottom:10}}>
                        <FontAwesome style={{marginTop:10}} name={'user'} size={22} color={Colors.darkBorder} />
                        <Text style={styles.iconCouples}>10.9k</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}} >
                    <TouchableOpacity  disabled={this.state.subscribed==true} onPress={() => this.subscribe()} style={styles.subscribeButton}>
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
        marginTop:10,
        backgroundColor: 'white',
        marginHorizontal: 15,
        borderRadius: 5
    },

    image:{
        height: 40,
        width: 40,
        borderRadius: 20,
    },

    title:{
        fontSize: 16, 
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 10,
    },

    iconCouples:{
        fontSize: 13, 
        color: 'black',
        marginLeft: 10,
        margin: 10,
        marginTop: 12
    },

    subscribeButton: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 4,
        width: 140,
        height: 30,
        borderRadius: 5,
        borderColor: Colors.darkBorder,
        borderWidth: 1
    },
    
    subscribe:{
        fontSize: 14, 
        color: 'black',
        fontWeight: 'bold'
    },
})
