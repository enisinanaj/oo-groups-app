import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import WelcomeCard from '../components/WelcomeCard';
import PostHeader from '../components/PostHeader';
import PostFeedback from '../components/PostFeedback';
import PostCard from '../components/PostCard';
import SinglePostFeedback from '../components/SinglePostFeedback';


export default class CompletePostCard extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            posts: []
        }
    }

 
  

  render() {
    return (
    <ScrollView style={styles.container}>
      <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
        <PostHeader  image={require('../images/user.jpg')} category={'calciomercato'} date={'3 ore fa'} name={'averagejuventinogroups'}/>
        <PostCard  postImage={require('../images/poppyflower.jpeg')} escription={"Giocatore eccezionale lasciato in panchina da quell'allenatore che di calcio capisce poco niente"}/>
        <View style={{ margin:10}}>
          <SinglePostFeedback/>
        </View>
      </View>
    </ScrollView>

    
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    flexDirection:'column',

  },

});
