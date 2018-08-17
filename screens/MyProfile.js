import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, ScrollView, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import ProfilePicture from './ProfilePicture';
import BioBox from './bioBox';
import ProfileContacts from './ProfileContacts';
import MyGroupsBar from './MyGroupsBar';
import Feather from 'react-native-vector-icons/Feather'
import MyGroupsComponent from './MyGroupsComponent';
import MyPostsBar from './MyPostsBar';



export default class MyProfile extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle: 'leandrolombardo',
        headerRight: (
            <TouchableOpacity style={{marginRight:10}}>
                <Feather name={'settings'} size={20}/>
            </TouchableOpacity>
          ),
        };
      };
    constructor(props) {
        super(props);
    
        this.state = {

         }
    }


  render() {
    
    return (
        <ScrollView style={styles.container}>
             <View style={{alignItems:'center', marginTop:20, marginBottom:10}}>
                 <ProfilePicture/>
            </View>
            <BioBox/>
            <View>
                <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:18, marginTop:10}}>My contacts</Text>
                <ProfileContacts />
            </View>
            <MyGroupsBar/>
            <MyGroupsComponent groupname={'averagejuventino'} rating={'10'} role={'Admin'}/>
            <MyGroupsComponent groupname={'calciatoribrutticlub'} rating={' 5'} role={'Member'}/>
            <MyPostsBar/>
            
        </ScrollView>

                
        
    )
}
}
 
const styles = StyleSheet.create({
    container: {
    flex:1
    },

    
})
