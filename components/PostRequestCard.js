import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView,Text,} from 'react-native';
import PostCard from '../components/PostCard';
import IconAvatar from '../components/IconAvatar';
import Colors from '../constants/Colors';
import ActionsOnMembers from './ActionsOnMember';




export default class PostRequestCard extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', padding:10, borderBottomWidth:1, marginBottom:10, borderBottomColor:Colors.lightBorder, justifyContent:'space-between', marginLeft:10, marginRight:10}}>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold', alignSelf:'center', fontSize:15}}>Post author</Text>
                        <View style={{flexDirection:'row', paddingTop:2}}>
                            <IconAvatar smallAvatar={this.props.smallAvatar}/>
                            <Text style={{marginTop:5, marginLeft:2}}>{this.props.author}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontWeight:'bold', alignSelf:'center', fontSize:15, marginRight:20 }}>Category</Text>
                        <Text style={{marginTop:7}}>{this.props.category}</Text>
                    </View>
                </View>
                <PostCard  postImage={this.props.postImage} description={this.props.description}/>
                <Actions onRemoveFromParentState={this.props.onRemoveFromParentState} elementId={this.props.elementId}></Actions>
            </View>
        );
    }
  
}

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            deleted: false,
            published: false
        }
    }

    publishPost() {
        this.setState({published: true}, () => {
            // call server to publish post
            setTimeout(() => this.props.onRemoveFromParentState(this.props.elementId), 1000)
        });
    }
    
    deletePost() {
        this.setState({deleted: true}, () => {
            // call server to delete post
            setTimeout(() => this.props.onRemoveFromParentState(this.props.elementId), 1000)
        });
    }
    
    render() {
        if (this.state.published) {   
            return(
                <View style={{marginLeft:20,justifyContent: 'center', flex:1}}>
                    <Text style={{padding:10, color:Colors.main}}>
                        Published
                    </Text>
                </View>
            )
        }

        if (this.state.deleted) {
            return(
                <View style={{marginLeft:20,justifyContent: 'center', flex:1}}>
                    <Text style={{padding:10, color:Colors.alert}}>
                        Deleted
                    </Text>
                </View>
            )
        }
    
        return(
            <View style={{flexDirection:'row', marginLeft:20, marginRight:20, Padding:10, justifyContent:'space-between'}}>
                <TouchableOpacity style={{padding:10}} onPress={()=> {this.publishPost()}}>
                    <Text style={{color:Colors.main}}>
                        Publish
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {this.deletePost()}} style={{padding:10}}>
                    <Text style={{color:Colors.alert}}>
                        Delete
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
 
    container:{
        backgroundColor:'white', 
        paddingBottom:10, 
        margin:5,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#566573',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,

    },

});
