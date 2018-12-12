import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import WelcomeCard from '../components/WelcomeCard';
import PostHeader from '../components/PostHeader';
import PostFeedback from '../components/PostFeedback';
import PostCard from '../components/PostCard';
import {NavigationSingleton} from './login';



export default class HomeFeed extends React.Component {
  static navigationOptions = {
    title: 'Groups',
    headerStyle: {
      backgroundColor: '#F5FCFF',
    },
    headerTintColor: 'transparent',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:30,
      color:'black',
    },
  };

    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            posts: []
        }
    }

    componentDidMount() {
      this.loadPosts()
    }

  async loadPosts () {
    await fetch("https://9grgijfrpootyjrsx.stoplight-proxy.io/v1/posts")
    .then((response) => {
      return response.json()
    }).then((responseJSON) => {
      this.setState({posts: responseJSON})
    }).catch((error) => {
      console.error(error)
    })
  }


  render() {
    const { navigation } = this.props;
    return (
    <View style={styles.container}>
      <ScrollView>
        <WelcomeCard />
        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader image={require('../images/tree.jpeg')} onPress={() => NavigationSingleton.instance.navigate("MemberView")}  category={'Global warming'} date={'3 ore fa'} name={'Ecofriends'}/>
          <PostCard  postImage={require('../images/pinguins.jpeg')} onPress={() => NavigationSingleton.instance.navigate("CompletePostCard")} description={"Global climate change has already had observable effects on the environment. Glaciers have shrunk, ice on rivers and lakes is breaking up earlier, plant and animal ranges have shifted and trees are flowering sooner."}/>
          <View style={{marginTop:10, padding:10}}>
            <PostFeedback postAdminAvatar={require('../images/profilepicture.jpeg')} postAdminName={'John Winston'}/>
          </View>
        </View>
      
        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader  
            image={require('../images/food.jpeg')} 
            onPress={() => NavigationSingleton.instance.navigate("AdminView")} 
            category={'Food blogging'} 
            date={'3 ore fa'} 
            name={'TravelForFood'}/>
          <PostCard  
            postImage={require('../images/streetfood.jpeg')} 
            description={"Erede moderno delle sagre, lo Street food spopola in Italia: da Milano a Caserta ecco gli appuntamenti per gli amanti del cibo da strada"}/>
          <View style={{marginTop:10, padding:10}}>
            <PostFeedback postAdminAvatar={require('../images/profilepicturegirl.jpeg')} postAdminName={'Jane Smith'}/>
          </View>
        </View>

        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader  image={require('../images/tree.jpeg')} onPress={() => NavigationSingleton.instance.navigate("AdminView")} category={'Nature'} date={'3 ore fa'} name={'Earthlings'}/>
          <PostCard  postImage={require('../images/poppyflower.jpeg')} description={"Poppies have long been used as a symbol of sleep, peace, and death..."}/>
          <View style={{marginTop:10, padding:10}}>
            <PostFeedback postAdminAvatar={require('../images/profilepicturegirl.jpeg')} postAdminName={'Jane Smith'}/>
          </View>
        </View>


      </ScrollView>
    </View>

    
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    flexDirection:'column',
  },

});
