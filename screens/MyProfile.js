import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, ScrollView, View, Image, TextInput,TouchableOpacity, Button} from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import BioBox from '../components/bioBox';
import ProfileContacts from '../components/ProfileContacts';
import MyGroupsBar from '../components/MyGroupsBar';
import Feather from 'react-native-vector-icons/Feather'
import MyGroupsComponent from '../components/MyGroupsComponent';
import MyPostsBar from '../components/MyPostsBar';
import {NavigationSingleton} from './login';



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
            mygroupsVisible:false,
         }
    }
    groupsVisibility = () =>{
    
        if(this.state.mygroupsVisible == true)
        {
            this.setState({mygroupsVisible: false})
        }
        else if (this.state.mygroupsVisible == false)
        {
            this.setState({mygroupsVisible: true})
        }
    }

    renderMyGroups(){
        return (
            <View style={{flex:1}}>
                <MyGroupsComponent onPress={() => NavigationSingleton.instance.navigate("MemberView")} groupname={'averagejuventino'} rating={'10'} role={'Admin'}/>
                <MyGroupsComponent groupname={'calciatoribrutticlub'} rating={' 5'} role={'Member'}/>
            </View>
        )
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
            <MyGroupsBar iconName={this.state.mygroupsVisible? 'chevron-up' : 'chevron-down'} onPress={this.groupsVisibility}/>
                {this.state.mygroupsVisible? this.renderMyGroups() : null}
            <MyPostsBar/>
            
        </ScrollView>

                
        
    )
}
}
 
const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'white',
    },

    
})
