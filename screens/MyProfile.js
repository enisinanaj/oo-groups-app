import React, {Component} from 'react';
import {StyleSheet,Text, Modal, ScrollView, View, Image, TextInput, TouchableHighlight,TouchableOpacity} from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import BioBox from '../components/bioBox';
import ProfileContacts from '../components/ProfileContacts';
import MyGroupsBar from '../components/MyGroupsBar';
import Feather from 'react-native-vector-icons/Feather'
import MyGroupsComponent from '../components/MyGroupsComponent';
import MyPostsBar from '../components/MyPostsBar';
import {NavigationSingleton} from './login';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CategoryPicker from '../components/CategoryPicker';
import { CheckBox } from 'react-native-elements';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';


export default class MyProfile extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle: User.getInstance().user.username,
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={{marginRight:10}}>
                <Feather name={'settings'} size={20}/>
            </TouchableOpacity>
          ),
        };
      };
    constructor(props) {
        super(props);
    
        this.state = {
            mygroupsVisible:false,
            modalVisible: false,
            mediaModalVisibe:false,
            selected: [],
            num:0,
            image:'',
            selectedCategory:'Default',
            text:'',
            checkedPrivate: false,
         }
    }

    componentDidMount() {
        fetch(APIConsts.apiEndpoint + "/utente/" + User.getInstance().user.id)
        .then(response => response.json())
        .then(responseJson => {
            User.getInstance().user = responseJson;
        })
    }

    hideShowCheck(){
        this.setState({checkedPrivate: !this.state.checkedPrivate})
    }

    setMediaModalVisible(visible){
        this.setState({mediaModalVisibe: visible})
    }
    
    getSelectedImages(image, current) {
        var num = image.length;
    
        this.setState({
          num: num,
          selected: image,
        });
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    renderSaveButton(){
        return(
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'black', height:50}}>
                <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    }

    newImage(){
        this.setState({
            image:this.state.selected,
            mediaModalVisibe: false
        })
    }

    renderImageSelectedModal() {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={this.state.mediaModalVisibe}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'white'}} onPress={() => {this.setState({mediaModalVisibe:false})}}>
                    <Text style={{color:'blue', backgroundColor:'white', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                </TouchableHighlight>
                
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={'white'}
                />

                {this.state.num != 0? this.renderSaveButton(): null}
            </Modal>
        )
    }
    groupsVisibility = () =>{
    
        if(this.state.mygroupsVisible == true)
        {
            this.setState({mygroupsVisible: false})
        }
        else if (this.state.mygroupsVisible == false)
        {
            this.setState({mygroupsVisible: true})
        }
    }

    renderMyGroups(){
        return (
            <View style={{flex:1}}>
                <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={{borderBottomWidth:1, borderColor:'#CCD1D1',}}>
                    <Text style={{ color:'red', margin:10, alignSelf:'flex-end'}}>
                        Create new group
                    </Text>
                </TouchableOpacity>
                <Modal
                    animationType="none"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                    }}>
                    <View style={{backgroundColor:'white', flex:1}}>
                        <View style={{marginTop: 22, }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={{fontSize:20, color:'#5499C7', marginTop:10, marginLeft:10}}>Cancel</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={{alignItems:'center', paddingTop:20, paddingBottom:20,borderBottomWidth:1, borderBottomColor:'#E5E8E8',}}>
                            <CategoryPicker title={'Seleziona categoria'} />
                        </View>

                        <View style={{ flexDirection: 'column'}}>
                            <View style={{flexDirection:'row', backgroundColor:'#EAECEE', padding:10}}>
                                <Text style={{marginTop:15}}> Name your group</Text>
                                <TextInput 
                                    style={{fontSize:15, height:30, flex:0.9,marginTop:10, marginLeft:10,backgroundColor:'white', borderColor:'#EBEDEF', borderRadius:5, borderWidth:1,marginRight:10, paddingLeft:10}}
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                    placeholder={'...'}
                                />
                            </View>
                            <View style={{flexDirection:'row', backgroundColor:'#EAECEE', padding:10}}>
                                <TouchableOpacity onPress={() => {this.setMediaModalVisible(!this.state.mediaModalVisibe)}}>
                                    <Text style={{marginTop:30, flex:0.5,}}>{this.state.selected==''? 'Select avatar': ' Avatar Selected'}</Text>
                                    {this.renderImageSelectedModal()} 
                                </TouchableOpacity>
                                <Image
                                    style={{width:60, height:60,borderRadius:30, marginLeft:40, margin:10}}
                                    source={this.state.image}
                                    />
                            </View>
                            <View style={{flexDirection:'row', paddingTop:20, backgroundColor:'#EAECEE', padding:10}}>

                                <Text style={{fontSize:15, flex:0.6}}>Visibility</Text>

                                <CheckBox
                                    center
                                    title='Public'
                                    onIconPress={() => this.hideShowCheck()}
                                    checked={!this.state.checkedPrivate}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checkedColor={'#34495E'}
                                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                                />

                                <CheckBox
                                    center
                                    title='Private'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                                    onIconPress={() => this.hideShowCheck()}
                                    checked={this.state.checkedPrivate}
                                    checkedColor={'#34495E'}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#34495E', padding:5, alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:22}}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <MyGroupsComponent smallAvatar={require('../images/soccercup.jpeg')} onPress={() => NavigationSingleton.instance.navigate("MemberView")} groupname={'Calccio'} rating={'10'} role={'Admin'}/>
                <MyGroupsComponent smallAvatar={require('../images/robot.jpeg')} groupname={'Tech'} rating={' 5'} role={'Member'}/>
                <MyGroupsComponent smallAvatar={require('../images/tree.jpeg')} groupname={'Nature'} rating={' 5'} role={'Member'}/>
                <MyGroupsComponent smallAvatar={require('../images/fashion.jpeg')} groupname={'OOTD'} rating={' 5'} role={'Member'}/>
                <MyGroupsComponent smallAvatar={require('../images/stadium.jpeg')} groupname={'calciatoribrutticlub'} rating={' 5'} role={'Member'}/>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={{alignItems:'center', marginTop:20, marginBottom:10}}>
                    <ProfilePicture image={{uri: User.getInstance().user.foto_profilo}} />
                </View>
                <BioBox/>
                <View>
                    <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:18, marginTop:10}}>My contacts</Text>
                    <ProfileContacts />
                </View>
                <MyGroupsBar iconName={this.state.mygroupsVisible? 'chevron-up' : 'chevron-down'} onPress={this.groupsVisibility}/>
                    {this.state.mygroupsVisible? this.renderMyGroups() : null}
                <MyPostsBar/>
            </ScrollView>   
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
})
