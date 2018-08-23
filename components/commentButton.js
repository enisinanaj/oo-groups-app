import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image,TextInput, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SmallAvatar from './SmallAvatar';



export default class CommentButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment:'',
            choosenInterest:false,
            commentInputVisible: false,
    }
}

commentInputVisible(){
    this.setState({commentInputVisible: true})
}

    renderCommentInput(){
        return(
            <View style={{backgroundColor:'white', position:'absolute',flexDirection:'row', flex:1}}>
                <TextInput
                    value={this.state.comment}
                    onChangeText={(newText) => this.setState({comment:newText})}
                    maxLength = {40}
                    keyboardAppearance={true}
                    placeholder={'Add a comment...'}
                    style={styles.singleInput}
                    
                />
                <View style={{alignItems:'center', marginBottom:15}}>
                    <TouchableOpacity disabled={this.state.message !=''? false: true}>
                        <Text style={this.state.comment!=''? {color:'tomato', fontSize:20} : {color:'white', fontSize:20}}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }

  render() {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => this.commentInputVisible()}>
                <EvilIcons style={{marginTop:3,}} name={'comment'} size={35} color="#ABB2B9" />
                <Text style={{color:'#5D6D7E', fontSize:15,marginLeft:5, marginTop:9}}>Comment</Text>
            </TouchableOpacity>
            {this.state.commentInputVisible? this.renderCommentInput() : null}
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
containerComment:{
    flexDirection:'row',
    padding:10,
    margin:5,
},
singleInput:{
    backgroundColor:'white',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#99A3A4',
    height:50,
    flex:1,
    padding:5,
    width:300,
    margin:10,
    marginBottom:10,
    
},
});
