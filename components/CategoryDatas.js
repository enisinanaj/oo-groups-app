import React, {Component} from 'react';
import { StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import RatingStar from './ratingStar';
import Feather from 'react-native-vector-icons/Feather'



export default class CategoryDatas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryTitle: this.props.categoryTitle,
            yourVote: this.props.yourVote,
            generalRating: this.props.generalRating,           
        }
    }


  render() {
    return (
        // <View style={styles.container}>
        //     <TouchableOpacity onPress={() => this.props.onPress()}>
        //         <Text style={{fontSize:18, fontWeight:'bold',marginTop:5, marginRight:10}}>{this.state.categoryTitle}</Text>
        //     </TouchableOpacity>
        //     <View style={{flexDirection:'row', marginTop:3}}>
        //         <Text style={{fontSize:15, marginRight:50,}}>{this.state.yourVote}</Text>
        //         <Text style={{fontSize:15, marginRight:5}}>{this.state.generalRating}</Text>
        //     </View>
        // </View>

        <View style={styles.container}>          
            <View style={{flexDirection: 'column', marginLeft: 15, marginRight: 0, justifyContent: 'space-between'}}>
                <TouchableOpacity  onPress={() => this.props.onPress()} style={{}}>
                    <Text style={{fontSize:18, fontWeight: '500', color: Colors.darkTitle}}>{this.state.categoryTitle}</Text>
                </TouchableOpacity>
            </View>
            
            <RatingStar style={{marginLeft: 10}} rating={this.state.generalRating}/>
            <Feather name={"chevron-right"} style={{position: 'absolute', right: 15, top: 5}} size={30} color={Colors.lighterText} />
        </View>
    );
  }
}




const styles = StyleSheet.create({
    // container:{
    //     flexDirection:'row',
    //     borderBottomWidth:1,
    //     borderColor:Colors.profileBorder,
    //     padding:10,
    //     backgroundColor:'white',
    //     justifyContent:'space-between',
    // },

    container:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        borderRadius: 20,
        padding: 10,
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: Colors.lightGreyBackground
    },
});
