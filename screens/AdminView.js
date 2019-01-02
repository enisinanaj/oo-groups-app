import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import MenuBarMember from '../components/MenuBarMember';
import MyGroupsBar from '../components/MyGroupsBar';
import CategoryDatas from '../components/CategoryDatas';
import ShareButton from '../components/ShareButton';
import CarouselGroup from '../components/CarouselGroup';
import AdminOptionsBar from '../components/AdminOptionsBar';
import ContactAdmin from '../components/ContactAdmin';
import AddNote from '../components/AddNote';


export default class AdminView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle: 'averagejuventinoguy',
        headerRight: (
            <TouchableOpacity style={{marginRight:10}}>
                <Entypo name={'dots-three-vertical'} size={20}/>
            </TouchableOpacity>
          ),
        };
    };
    constructor(props) {
        super(props);
        
    }


  render() {
    return (

        <ScrollView style={styles.container}>
           <ContactAdmin groupProfilePicture={require('../images/profilepicture.jpeg')}/>
           <AdminOptionsBar/>
           <View style={{marginTop:-10}}>
                <MenuBarMember />
            </View>
            <AddNote/>
            <CarouselGroup/>
            <ShareButton/>
            <View >
                <MyGroupsBar title={"Categories"} rightViewVisible={false}>
                    <CategoryDatas onPress={() => props.navigation.navigate("Posts")} categoryTitle={'Memes'} yourVote={10} generalRating={'9,7'}/>
                    <CategoryDatas categoryTitle={'Calciomercato'} yourVote={10} generalRating={'9,1'}/>
                    <CategoryDatas categoryTitle={'Champions'} yourVote={10} generalRating={'9,5'}/>
                    <CategoryDatas categoryTitle={'WorldCup'} yourVote={10} generalRating={'9,9'}/>
                </MyGroupsBar>
            </View>
        </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    padding:5,
    backgroundColor:'white',
},

});
