import React, {Component} from 'react';
import { StyleSheet,Text, View, TextInput, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import CommentData from './CommentData';
import PostAdmin from './PostAdmin';
import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';
import Colors from '../constants/Colors';



export default class PostFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            choosenInterest:false,
            commentInputVisible: false,
            activeLike:false,
            activeDislike:false,
        }
    }
    commentInputVisible(){
        this.setState({commentInputVisible: !this.state.commentInputVisible})
    }
    
    renderCommentInput(){
        return(
            <View style={{backgroundColor:'transparent',flexDirection:'row', flex:1, marginRight:15}}>
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
                        <Text style={this.state.comment!=''? {color:Colors.main, marginTop:20,fontSize:20} : {color:Colors.inactive, marginTop:20,fontSize:20}}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
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
    
    <View style={{flexDirection:'column', marginTop:10}}>
        <View style={{flexDirection:'row', marginTop:-30}}>
            <CommentData datas={'2.3k'}/>
            <CommentData datas={'500'}/>
            <View style={{alignItems: 'flex-end'}}>
                <PostAdmin postAdminAvatar={this.props.postAdminAvatar} postAdminName={this.props.postAdminName} />
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
