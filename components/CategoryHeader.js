import React, {Component} from 'react';
import { StyleSheet,Text, View} from 'react-native';
import Colors from '../constants/Colors';


export default class CategoryHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ratings: this.props.ratings,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <Text style={{fontSize:18, marginTop:5, marginRight:10}}>Category</Text>
            <View style={{flexDirection:'row', marginTop:3}}>
                <Text style={{fontSize:15, marginRight:15,}}>your vote</Text>
            
                <Text style={{fontSize:15, }}>rating</Text>
            </View>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:Colors.profileBorder,
    padding:10,
    justifyContent:'space-between',
},

});
