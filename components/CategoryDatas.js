import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';



export default class CategoryDatas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryTitle: this.props.categoryTitle,
            yourVote:this.props.yourVote,
            generalRating:this.props.generalRating,           
        }
    }


  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <Text style={{fontSize:18, fontWeight:'bold',marginTop:5, marginRight:10}}>{this.state.categoryTitle}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', marginTop:3}}>
                <Text style={{fontSize:15, marginRight:50,}}>{this.state.yourVote}</Text>
            
                <Text style={{fontSize:15, marginRight:5}}>{this.state.generalRating}</Text>
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
    backgroundColor:'white',
    justifyContent:'space-between',
},

});
