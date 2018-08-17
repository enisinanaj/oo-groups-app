import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CommentData from './CommentData';
import PostAdmin from './PostAdmin';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import CommentButton from './commentButton';



export default class PostFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            choosenInterest:false,
            commentInputVisible: false,
    }
    }
    commentInputVisible(){
        this.setState({commentInputVisible: !this.state.commentInputVisible})
    }
    
        renderCommentInput(){
            return(
                <View style={{backgroundColor:'transparent',flexDirection:'row', flex:1}}>
                    <TextInput
                        value={this.state.comment}
                        onChangeText={(newText) => this.setState({comment:newText})}
                        maxLength = {40}
                        keyboardAppearance={true}
                        placeholder={'Add a comment...'}
                        style={styles.singleInput}
                        
                    />
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity disabled={this.state.message !=''? false: true}>
                            <Text style={this.state.comment!=''? {color:'#3498DB', marginTop:20,fontSize:20} : {color:'gray', marginTop:20,fontSize:20}}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    
            );
        }
    

  render() {
    return (
    
    <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row', marginTop:-30}}>
            <CommentData datas={'2.3k'}/>
            <CommentData datas={'500'}/>
            <View style={{marginLeft:-10}}>
                <PostAdmin />
            </View>
        </View>
        <View style={{flexDirection:'row', marginLeft:10, marginTop:-20}}>
            <LikeButton />
            <View style={{marginTop:6}}>
                <DislikeButton/>
            </View>
            <View>
                <TouchableOpacity style={styles.containerComment} onPress={() => this.commentInputVisible()}>
                    <EvilIcons style={{marginTop:3,}} name={'comment'} size={35} color="#ABB2B9" />
                    <Text style={{color:'#5D6D7E', fontSize:15,marginLeft:5, marginTop:9}}>Comment</Text>
                </TouchableOpacity>
            </View>
        </View>
        {this.state.commentInputVisible? this.renderCommentInput() : null}
    </View>
   
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
    margin:5,
},
containerComment:{
    flexDirection:'row',
    padding:10,
    margin:5,
},
singleInput:{
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#D5D8DC',
    height:40,
    flex:1,
    padding:5,
    margin:10,
    marginBottom:10,
    
},

});
