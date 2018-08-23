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
          <PostHeader onPress={() => NavigationSingleton.instance.navigate("MemberView")}  category={'calciomercato'} date={'3 ore fa'} name={'averagejuventinogroups'}/>
          <PostCard  onPress={() => NavigationSingleton.instance.navigate("CompletePostCard")} description={"Giocatore eccezionale lasciato in panchina da quell'allenatore che di calcio capisce poco niente"}/>
          <View style={{marginTop:10, padding:10}}>
            <PostFeedback/>
          </View>
        </View>
      
        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader  onPress={() => NavigationSingleton.instance.navigate("AdminView")} category={'calciomercato'} date={'3 ore fa'} name={'averagejuventinogroups'}/>
          <PostCard  description={"Giocatore eccezionale lasciato in panchina da quell'allenatore che di calcio capisce poco niente"}/>
          <View style={{marginTop:10, padding:10}}>
            <PostFeedback/>
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
