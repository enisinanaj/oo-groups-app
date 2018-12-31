import React from 'react';
import {StyleSheet, StatusBar,Text, ScrollView, View, Image, TouchableOpacity, Modal} from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import BioBox from '../components/bioBox';
import ProfileContacts from '../components/ProfileContacts';
import MyGroupsBar from '../components/MyGroupsBar';
import MyGroupsComponent from '../components/MyGroupsComponent';
import MyPostsBar from '../components/MyPostsBar';
import { NavigationSingleton } from './login';
import NewGroupModal from '../components/NewGroupModal';
import User from '../controllers/user/instance';
import APIConsts from '../constants/APIConsts';
import Feather from 'react-native-vector-icons/Feather';
import Colors, {GlobalStyles} from '../constants/Colors';


export default class MyProfile extends React.Component {
    static navigationOptions = ({navigation}) => {
        let {params = {}} = navigation.state;
        // let foo = () => {}
        // let updateParentState = params.updateParentState != undefined ? params.updateParentState : foo
        
        return {
            header: null,
            headerTitle: params.user != undefined ? params.user.username : 'Profilo',
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
            createGroupModal: false,
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

        this.updateState();
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
        }).catch(e => console.error(e))
    }

    hideShowCheck(){
        this.setState({checkedPrivate: !this.state.checkedPrivate})
    }

    setModalVisible(visible) {
        this.setState({createGroupModal: visible});
    }

    renderSaveButton(){
        return(
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'black', height:50}}>
                <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
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
                <StatusBar barStyle={'dark-content'} />
                <View style={styles.profileIntro}>
                    <Image style={styles.coverImage} 
                        source={{uri: this.state.user.foto_copertina == null ? '' : this.state.user.foto_copertina}} />
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
                    <TouchableOpacity onPress={() => this.setModalVisible(true)}
                         style={GlobalStyles.btn}>
                        <Feather name={"plus"} size={22} color={'white'}/>
                        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Text style={ {color: 'white', fontSize: 16} }>Crea un nuovo gruppo</Text>
                        </View>
                        <View style={ {width: 30} } />
                    </TouchableOpacity>
                </View>
                <Modal
                        animationType={"slide"}
                        transparent={false}
                        visible={this.state.createGroupModal}
                        onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <NewGroupModal open={this.state.createGroupModal} close={(prop) => this.setModalVisible(prop)} />
                </Modal>
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
    },

    sectionHeader: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        color: Colors.darkTitle,
        fontWeight: '500',
        marginHorizontal: 20
    },

    fieldContainer: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'flex-start',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.5
    },

    fieldLabel: {
        fontSize: 12,
        color: Colors.lighterText,
        width: 100,
        marginTop: 6
    },

    singleInput:{
        backgroundColor:'transparent',
        marginRight: 0,
        marginLeft: 10,
        padding: 5,
        fontSize: 14,
        flex: 1
    }
})
