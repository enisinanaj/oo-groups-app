import React from 'react';
import {StyleSheet, StatusBar,Text, Modal, ScrollView, View, Image, TextInput, TouchableHighlight,TouchableOpacity} from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import BioBox from '../components/bioBox';
import ProfileContacts from '../components/ProfileContacts';
import MyGroupsBar from '../components/MyGroupsBar';
import MyGroupsComponent from '../components/MyGroupsComponent';
import MyPostsBar from '../components/MyPostsBar';
import {NavigationSingleton} from './login';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CategoryPicker from '../components/CategoryPicker';
import { CheckBox } from 'react-native-elements';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';
import Feather from 'react-native-vector-icons/Feather'
import Colors from '../constants/Colors';


export default class MyProfile extends React.Component {
    static navigationOptions = ({navigation}) => {
        let {params = {}} = navigation.state;
        let foo = () => {}
        let updateParentState = params.updateParentState != undefined ? params.updateParentState : foo
        
        return {
            header: null
            // headerTitle: params.user != undefined ? params.user.username : 'Profilo',
            // headerRight: (
            //     <TouchableOpacity onPress={() => navigation.navigate("Settings", {updateParentState: () => updateParentState()})} style={{marginRight:15}}>
            //         <Feather name={'settings'} size={24}/>
            //     </TouchableOpacity>
            // )
        };
    };

    constructor(props) {
        super(props);
    
        this.state = {
            user: User.getInstance().user,
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
        this.props.navigation.setParams({
            updateParentState: () => this.updateState(),
            user: this.state.user
        });
    }

    updateState() {        
        fetch(APIConsts.apiEndpoint + "/utente/" + User.getInstance().user.id)
        .then(response => response.json())
        .then(responseJSON => {
            User.getInstance().setUser(responseJSON);
            this.setState({user: User.getInstance().user}, () => {
                this.props.navigation.setParams({
                    updateParentState: () => this.updateState(),
                    user: this.state.user
                });
            })
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
    groupsVisibility = () => {
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
                <MyGroupsComponent smallAvatar={require('../images/soccercup.jpeg')} onPress={() => NavigationSingleton.instance.navigate("MemberView")} groupname={'Calcio'} rating={'10'} role={'Admin'} memberCount={"13M"}/>
                <MyGroupsComponent smallAvatar={require('../images/robot.jpeg')} groupname={'Tech'} rating={' 5'} role={'Member'} memberCount={"22K"}/>
                <MyGroupsComponent smallAvatar={require('../images/tree.jpeg')} groupname={'Nature'} rating={' 5'} role={'Member'} memberCount={"132K"}/>
                <MyGroupsComponent smallAvatar={require('../images/fashion.jpeg')} groupname={'OOTD'} rating={' 5'} role={'Member'} memberCount={"760K"}/>
                <MyGroupsComponent smallAvatar={require('../images/stadium.jpeg')} groupname={'calciatoribrutticlub'} rating={' 5'} role={'Member'} memberCount={"20K"}/>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: 'white'}}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.profileIntro}>
                    <Image style={styles.coverImage} 
                        source={{uri: 'https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}} />
                    <View style={styles.headerBar}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{marginLeft: 10, width: 30}}></View>
                            <Text style={{color: 'white', fontWeight: '800', textAlign: 'center'}}>@{this.state.user.username}</Text>
                            <TouchableOpacity style={{marginRight: 10, width: 30}}
                                onPress={() => this.props.navigation.navigate("Settings", {updateParentState: () => this.updateState()})}>
                                <Feather name={'settings'} size={24} color={'white'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{marginTop: 80}}>
                        <ProfilePicture image={{uri: User.getInstance().user.foto_profilo}} />
                        <View style={{padding: 10}}>
                            <Text style={styles.username}>{this.state.user.username}</Text>
                            <BioBox style={{marginBottom: 10}} />
                            <ProfileContacts />
                        </View>
                    </View>
                </View>
                <MyGroupsBar iconName={this.state.mygroupsVisible? 'minus' : 'plus'} label={this.state.mygroupsVisible? 'nascondi' : 'visualizza'} onPress={this.groupsVisibility}/>
                    {this.state.mygroupsVisible? this.renderMyGroups() : null}
                {/* <MyPostsBar/> */}
                <View style={{marginTop: 15, marginBottom: 20}}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',
                        paddingHorizontal: 25, paddingVertical: 15, backgroundColor: Colors.accent1, marginLeft: 10, marginRight: 10, borderRadius: 30}}>
                        <Feather name={"plus"} size={22} color={'white'}/>
                        <Text style={{color: 'white', fontSize: 16}}>Crea un nuovo gruppo</Text>
                        <View style={{width: 30}} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    coverImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 160
    },
    headerBar: {
        top: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        position: 'absolute',
        height: 44
    },
    username: {
        fontSize: 24,
        marginTop: 5,
        color: '#4e4e4e',
        marginBottom: 10,
        textAlign: 'center',
        marginBottom: 20
    },
    profileIntro: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    }
})
