import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import MenuBarMember from './MenuBarMember';
import GroupProfileHeader from './GroupProfileHeader';
import NotesBar from './NotesBar';
import CategoryHeader from './CategoryHeader';
import CategoryDatas from './CategoryDatas';
import ShareButton from './ShareButton';
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import CarouselGroup from './CarouselGroup';


export default class MemberView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle: 'averagejuventinoguy',
        headerRight: (
            <TouchableOpacity style={{marginRight:10}}>
                <Entypo name={'dots-three-vertical'} size={20}/>
            </TouchableOpacity>
          ),
          headerLeft:<TouchableOpacity style={{marginLeft:10}}onPress={() => { this.props.navigation.goBack() }}><Feather name={'arrow-left'} size={20}/></TouchableOpacity>
        };
    };
    constructor(props) {
        super(props);
        
    }


  render() {
    return (

        <ScrollView style={styles.container}>
           <GroupProfileHeader />
           <View style={{marginTop:-20}}>
                <MenuBarMember />
            </View>
            <NotesBar/>
            <CarouselGroup/>
            <ShareButton/>
            <View >
                <CategoryHeader/>
                <CategoryDatas categoryTitle={'Memes'} yourVote={10} generalRating={'9,7'}/>
                <CategoryDatas categoryTitle={'Calciomercato'} yourVote={10} generalRating={'9,1'}/>
                <CategoryDatas categoryTitle={'Champions'} yourVote={10} generalRating={'9,5'}/>
                <CategoryDatas categoryTitle={'WorldCup'} yourVote={10} generalRating={'9,9'}/>
            </View>
        </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    margin:5,
},

});
