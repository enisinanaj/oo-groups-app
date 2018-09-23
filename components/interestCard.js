import React, {Component} from 'react';
import {Platform, Dimensions, StyleSheet, Width,Text, height, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import { Shadow } from '../constants/Colors';



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
      <View style={[Shadow.cardShadow, {borderRadius: 5, marginHorizontal: 14, marginVertical: 7}]}>
            <TouchableOpacity disabled={this.state.choosenInterest == true} onPress={() => this.InterestChosen()} 
                style={{justifyContent: 'space-between', flexDirection: 'column'}}>
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
        height: 140,  
        borderRadius: 5
    },

    imageCover:{
        height: 140,
        width: 360,
        marginTop: 10, 
        marginHorizontal: 8,
        backgroundColor: 'white',
        opacity: 0,
        position: 'absolute',
    },
    
    imageCoverChosen:{
        height: 140,
        width: Dimensions.get('window').width - 16,
        backgroundColor: 'white',
        opacity: 0.4,
        position: 'absolute',
    },

    coverText: {
        fontSize: 30,
        color: 'white',
        position: 'absolute',
        marginTop: 15,
        marginLeft: 15
    },
})
