import React, {Component} from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import MenuBarMember from '../components/MenuBarMember';
import GroupProfileHeader from '../components/GroupProfileHeader';
import NotesBar from '../components/NotesBar';
import CategoryDatas from '../components/CategoryDatas';
import ShareButton from '../components/ShareButton';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather'
import CarouselGroup from '../components/CarouselGroup';
import Colors from '../constants/Colors';
import APIConsts from '../constants/APIConsts';
import ProfilePicture from '../components/ProfilePicture';
import MyGroupsBar from '../components/MyGroupsBar'


class MemberView extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null,
            headerTitle: navigation.state.params.group.nome,
            headerRight: (
                <TouchableOpacity style={{marginRight:10}}>
                    <Entypo name={'dots-three-vertical'} size={20}/>
                </TouchableOpacity>
            ),
            headerLeft:<TouchableOpacity style={{marginLeft:10}} onPress={() => { navigation.goBack() }}><Feather name={'arrow-left'} size={20}/></TouchableOpacity>
        };
    };
    
    constructor(props) {
        super(props);
        
        this.state = {
            group: this.props.navigation.state.params.group
        }
    }
}

export default Profile = (props) => {
    let {group} = props.navigation.state.params;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileIntro}>
                <Image style={styles.coverImage} 
                    source={{uri: APIConsts.apiEndpoint + group.immagine_copertina.url}} />
                <View style={styles.headerBar}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{marginLeft: 10, width: 30}}></View>
                        <Text style={{color: 'white', fontWeight: '800', textAlign: 'center'}}>{group.nome}</Text>
                        <TouchableOpacity style={{marginRight: 10, width: 30}}
                            onPress={() => props.navigation.navigate("Settings", {updateParentState: () => this.updateState()})}>
                            {/* <Feather name={'settings'} size={24} color={'white'}/> */}
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 70}}>
                    <ProfilePicture image={{uri: APIConsts.apiEndpoint + group.immagine_profilo.url}} />
                </View>
            </View>

            <MenuBarMember style={{marginTop: 10}} group={group} navigation={props.navigation} />
            {/* <NotesBar/> why is this? part of the carousel? */}
            {/* <CarouselGroup/> */}
            {/* <ShareButton/> */}
            <MyGroupsBar style={{marginTop: 25}} titleStyle={{marginBottom: 10}} title={"Categorie"} rightViewVisible={false}>
                <CategoryDatas onPress={() => props.navigation.navigate("Posts")} categoryTitle={'Memes'} yourVote={10} generalRating={'9,7'}/>
                <CategoryDatas categoryTitle={'Calciomercato'} yourVote={10} generalRating={'9,1'}/>
                <CategoryDatas categoryTitle={'Champions'} yourVote={10} generalRating={'9,5'}/>
                <CategoryDatas categoryTitle={'WorldCup'} yourVote={10} generalRating={'9,9'}/>
            </MyGroupsBar>
        </ScrollView>
    );
}




const styles = StyleSheet.create({
 
    container:{
        flexDirection:'column',
        backgroundColor: 'white'
    },

    coverImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 240
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
        textAlign: 'center',
        // marginBottom: 20
    },

    profileIntro: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        // marginBottom: 20
    },

    sectionHeader: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        color: Colors.darkTitle,
        fontWeight: '500',
        marginHorizontal: 20
    },
});
