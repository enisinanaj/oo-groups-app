import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';



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
            <Text style={{fontSize:18, fontWeight:'bold',marginTop:5, marginRight:10}}>{this.state.categoryTitle}</Text>
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
    borderColor:'#CCD1D1',
    padding:10,
    backgroundColor:'#EBEDEF',
    justifyContent:'space-between',
},

});
