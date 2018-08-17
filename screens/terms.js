import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, ScrollView, View, TouchableOpacity, Button} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class Terms extends React.Component {
    static navigationOptions = {
        title: 'Termini e condizioni',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    constructor() {
        super();
    
        this.state = {
            checked: false,
            terms:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum..Lorem ipsum dolor sit amet, consectetur adipiscing eli. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...'
        }
    }

    hideShowCheck(){
        this.setState({checked: !this.state.checked})
    } 
  render() {
    
    return (
      <View style={styles.container}> 
        <ScrollView style={{backgroundColor:'#F8F9F9'}}>
            <Text style={styles.textBox}>{this.state.terms}</Text>
        </ScrollView>
        <View style={{flexDirection:'row', paddingHorizontal:10, backgroundColor:'white'}}>
            <CheckBox
                onIconPress={() => this.hideShowCheck()}
                checked={!this.state.checked}
                center
                checkedColor={'black'}
                checked={this.state.checked}
                containerStyle={{width:43, marginLeft:5, backgroundColor:'transparent', borderColor:'transparent'}}
            />
            <Text style={{fontSize:18, marginRight:10, marginTop:5 }}>Dichiaro di aver letto e di accettare i termini e le condizioni </Text>
        </View>
        <TouchableOpacity disabled={!this.state.checked} onPress={() => this.props.navigation.navigate('UsernameSetUp')}> 
            <Text style={this.state.checked? styles.enabled : styles.disabled}>Avanti </Text>
        </TouchableOpacity>
      </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',

    },

    disabled:{
        fontSize:25, 
        alignSelf:'flex-end', 
        margin:10, 
        color:'black'
    },
    enabled:{
        fontSize:25, 
        alignSelf:'flex-end', 
        margin:10, 
        color:'blue'
    },

    title:{
        marginTop:40,
        alignSelf:'center',
        fontSize:20,
        color:'black',
    },
    textBox:{
        marginTop:20,
        padding:20,
        fontSize:15,
    },
})
