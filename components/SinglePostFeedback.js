import React, {Component} from 'react';
import { StyleSheet, Width,Text, Image, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CommentData from './CommentData';
import PostAdmin from './PostAdmin';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import CommentButton from './commentButton';
import UserCommentCard from './UserComentCard';



export default class SinglePostFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            choosenInterest:false,
            activeLike:false,
            activeDislike:false,
        }
    }

    likeButtonActivity = () =>{

        if(this.state.activeLike == true)
        {
            this.setState({activeLike: false})
        }
        else if (this.state.activeLike == false)
        {
            this.setState({activeLike: true, activeDislike:false})
        }
    }

    dislikeButtonActivity = () =>{

        if(this.state.activeDislike == true)
        {
            this.setState({activeDislike: false})
        }
        else if (this.state.activeDislike == false)
        {
            this.setState({activeDislike: true, activeLike: false})
        }
       
    }
       

  render() {
    return (
    
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', marginTop:-10,}}>
            <CommentData datas={'2.3k'}/>
            <CommentData datas={'500'}/>
            <View style={{marginLeft:-10}}>
                <PostAdmin />
            </View>
        </View>
        <View style={{flexDirection:'row', marginLeft:10, marginTop:-20}}>
            <LikeButton 
                textStyle={this.state.activeLike== true? styles.activeText : styles.inactiveText} 
                style={this.state.activeLike== true? styles.activeThumb : styles.inactiveThumb} 
                onPress={this.likeButtonActivity}
            />
            <View style={{marginTop:6}}>
                <DislikeButton 
                    textStyle={this.state.activeDislike== true? styles.activeDislikeText : styles.inactiveDislikeText} 
                    style={this.state.activeDislike== true? styles.activeDislike : styles.inactiveDislike} 
                    onPress={this.dislikeButtonActivity}
                />
            </View>
        </View>
        <View style={{borderTopWidth:1, borderColor:'#CFD8DC', flex:1}}>
            <UserCommentCard comment={'this is great :D '} user={'JuventinoFan'}/>
            <UserCommentCard comment={'This app is really great! I finally have something im really interested in'} user={'JuventinoFan'}/>
        </View>
        <View style={{backgroundColor:'transparent',flexDirection:'row', padding:5,}}>
            <Image
                style={{width:30, height:30,borderRadius:15, margin:3, marginRigh:5}}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
            />
            <TextInput
                value={this.state.comment}
                onChangeText={(newText) => this.setState({comment:newText})}
                maxLength = {40}
                keyboardAppearance={true}
                placeholder={'Add a comment...'}
                style={styles.singleInput}  
            />          
        </View>
        <TouchableOpacity style={{flex:1, alignItems:'center', paddingTop:10, paddingBottom:10, backgroundColor:'white'}}disabled={this.state.comment !=''? false: true}>
            <Text style={this.state.comment!=''? {color:'#3498DB', fontSize:20} : {color:'gray',fontSize:20}}>Send</Text>
        </TouchableOpacity>
    </ScrollView>
   
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',

},

singleInput:{
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#D5D8DC',
    height:40,
    flex:1,
    padding:5,    
},

inactiveThumb:{
    color:'#ABB2B9',
    marginTop:3,
},
activeThumb:{
    color:'#5DADE2',
    marginTop:3,
},
inactiveText:{
    color:'#5D6D7E',
    fontSize:15,
    marginLeft:5,
    marginTop:9,
},
activeText:{
    color:'#5DADE2',
    fontSize:15,
    marginLeft:5,
    marginTop:9,
},
inactiveDislike:{
    color:'#ABB2B9',
    marginTop:2,
},
activeDislike:{
    color:'#5DADE2',
    marginTop:2,
},
inactiveDislikeText:{
    color:'#5D6D7E',
    fontSize:15,
    marginLeft:5,
    marginTop:2,
},
activeDislikeText:{
    color:'#5DADE2',
    fontSize:15,
    marginLeft:5,
    marginTop:2,
},

});
