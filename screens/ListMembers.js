import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import MemberListCard from '../components/memberListCard';
import SearchMembers from '../components/searchMembers';
import BannedUsers from '../components/BannedUsers';



export default class ListMembers extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: (
                <View style={{marginRight:30}}>
                    <SearchMembers />
                </View>
            )
        };
      };
    constructor(props) {
        super(props);
        this.state={
            viewToRender: 'Members',
        }
    }
    showMembers() {
        this.setState({viewToRender: 'Members'});
    }

    showBlocked() {
        this.setState({viewToRender: 'Blocked'});
    }

    renderMembers() {
        return (
    
            <View style={{flexDirection:'column', flex:1,borderBottomWidth:1, borderColor:'#E5E8E8',}}>
                <MemberListCard  user={'Lorem Ipsum'}/>
                <MemberListCard  user={'John Smith'}/>
            </View>
        );
    }

    renderBlocked() {
        return (
    
            <View style={{flexDirection:'column', flex:1,borderBottomWidth:1, borderColor:'#E5E8E8',}}>
                <BannedUsers user ={'Mario Rossi Rossi'}/>
                <BannedUsers user ={'Mario Rossi'}/>
                <BannedUsers user ={'Mario Rossi'}/>
                <BannedUsers user ={'Mario Rossi'}/>
            </View>
        );
    }


  render() {
    return (
        
        <View style={styles.container}>
            <View style={{flexDirection:'row', borderBottomWidth:1, borderColor:'#E5E8E8',}}>
                <View style={{flex:0.5, alignItems:'center', height:40, backgroundColor:'white'}} >
                    <TouchableOpacity onPress ={this.showMembers.bind(this)}>
                        <Text style={{marginTop:10, fontSize: 15}}>Members</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:0.5, alignItems:'center', height:40, backgroundColor:'white'}} >
                    <TouchableOpacity onPress={this.showBlocked.bind(this)}>
                        <Text style={{marginTop:10, color:'red', fontSize: 15}}>Banned</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {this.state.viewToRender == "Members" ? this.renderMembers() : this.renderBlocked() }
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    padding:5,
    flex:1,
    backgroundColor:'white',

},

});
