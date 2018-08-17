import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import WelcomeCard from './WelcomeCard';
import PostHeader from './PostHeader';
import PostFeedback from './PostFeedback';
import PostCard from './PostCard';


export default class Posts extends React.Component {
  static navigationOptions = {
    title: 'Posts',
    headerStyle: {
      backgroundColor: '#F5FCFF',
    },
    headerTintColor: 'transparent',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:25,
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
    return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader  category={'calciomercato'} date={'3 ore fa'} name={'averagejuventinogroups'}/>
          <PostCard  description={"Giocatore eccezionale lasciato in panchina da quell'allenatore che di calcio capisce poco niente"}/>
          <View style={{marginTop:-10, padding:10}}>
            <PostFeedback/>
          </View>
        </View>
      
        <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
          <PostHeader  category={'Champions'} date={'12 ore fa'} name={'ChampionsLeague'}/>
          <PostCard  description={"Giocatore eccezionale lasciato in panchina da quell'allenatore che di calcio capisce poco niente"}/>
          <View style={{marginTop:-10, padding:10}}>
            <PostFeedback/>
          </View>
        </View>
        {/* {
          this.state.posts.map((el) => {
            return (
              <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:'#E5E7E9'}}>
                <PostHeader  category={el.category[0]} date={'3 ore fa'} name={el.group.name}/>
                <View style={{padding:20}}>
                  <Text style={{fontSize:17}}>
                    {el.text}
                  </Text>
                  <Image
                    style={{width:340, marginTop:10, height:190,}}
                    source={{uri: 'https://lagiornatasportiva.it/wp-content/uploads/2018/02/cristiano-ronaldo-net-worth.jpg'}}
                />
                </View>
                  <View style={{marginTop:-10, padding:10}}>
                    <PostFeedback/>
                  </View>
              </View>
            )
          })
        } */}
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
