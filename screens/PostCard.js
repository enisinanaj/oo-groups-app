import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import WelcomeCard from './WelcomeCard';
import PostHeader from './PostHeader';
import PostFeedback from './PostFeedback';



export default class PostCard extends React.Component {
  
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            description:this.props.description,
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
    return (

        <View style={{padding:20}}>
            <Text style={{fontSize:17}}>{this.state.description}
            </Text>
            <Image
                style={{width:340, marginTop:10, height:190,}}
                source={{uri: 'https://lagiornatasportiva.it/wp-content/uploads/2018/02/cristiano-ronaldo-net-worth.jpg'}}
            />
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
