import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';



export default class InterestCard extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            image:{uri: this.props.image},
            title: this.props.title,
            choosenInterest:false,
         }
    }
    InterestChosen(){
        this.setState({choosenInterest: true})
    }

  render() {
    
    return (
      <View>
        <TouchableOpacity disabled={this.state.choosenInterest == true} onPress={() => this.InterestChosen()} >
            <Image
                style={styles.image}
                source={this.state.image}
            />
            <Text style={styles.coverText}>{this.state.title}</Text>
            <View style={this.state.choosenInterest? styles.imageCoverChosen : styles.imageCover}> 
            </View>
        </TouchableOpacity>
        </View>
                
        
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },

    image:{
        height:140, 
        marginTop:10, 
        marginHorizontal:8
    },

    imageCover:{
        height:140,
        width:360,
        marginTop:10, 
        marginHorizontal:8,
        backgroundColor:'white',
        opacity:0,
        position:'absolute',
    },
    imageCoverChosen:{
        height:140,
        width:360,
        marginTop:10, 
        marginHorizontal:8,
        backgroundColor:'white',
        opacity:0.4,
        position:'absolute',
    },
    coverText:{
        fontSize:60, 
        alignSelf:'center',
        color:'blue',
        position: 'absolute',
        marginTop:30,
    },
})
