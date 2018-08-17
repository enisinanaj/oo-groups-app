/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Login from './screens/login';
import Terms from './screens/terms';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import UsernameSetUp from './screens/UsernameSetUp';
import ChooseInterests from './screens/ChooseInterests';
import GroupCard from './screens/GroupCard';
import GroupSuggestions from './screens/GroupSuggestions';
import EmptyProfile from './screens/EmptyProfile';
import SimpleButton from './screens/SimpleButton';
import MediumSimpleButton from './screens/MediumSimpleButton';
import navigation from './navigation';
import WelcomeCard from './screens/WelcomeCard';
import HomeFeed from './screens/HomeFeed';
import HomeStack from './navigation';
import PostHeader from './screens/PostHeader';
import PostFeedback from './screens/PostFeedback';
import LikeButton from './screens/LikeButton';
import DislikeButton from './screens/DislikeButton';
import commentButton from './screens/commentButton';
import CommentData from './screens/CommentData';
import PostAdmin from './screens/PostAdmin';
import GroupProfilePicture from './screens/GroupProfilePicture';
import Members from './screens/Members';
import ContactsIcons from './screens/ContactsIcons';
import GroupProfileHeader from './screens/GroupProfileHeader';
import MenuBarMember from './screens/MenuBarMember';
import MemberView from './screens/memberView';
import NotesBar from './screens/NotesBar';
import ShareButton from './screens/ShareButton';
import CategoryHeader from './screens/CategoryHeader';
import CarouselGroup from './screens/CarouselGroup';
import SwiperNotes from './screens/SwiperNotes';
import AdminOptionsBar from './screens/AdminOptionsBar';
import AdminView from './screens/AdminView';
import ProfileContacts from './screens/ProfileContacts';
import ProfilePicture from './screens/ProfilePicture';
import BioBox from './screens/bioBox';
import MyGroupsBar from './screens/MyGroupsBar';
import RatingStar from './screens/ratingStar';
import MyProfile from './screens/MyProfile';



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


//  class App extends React.Component {
//    render() {
//      return (
//        <View style={styles.container}>
//          <Login navigation={this.props.navigation} />
//        </View>
//      );
//    }
// }

export default StackNavigator({
    Home: {screen: HomeStack},
    //UsernameSetUp: {screen: UsernameSetUp},
    //Terms: {screen: Terms},
    //ChooseInterests:{screen:ChooseInterests},
    Profile: {screen: MyProfile},
    Groups: {screen: GroupSuggestions},
    Posts:{screen: HomeFeed}
    
  },
{
  headerMode: 'none'
}
);

//export default <Login />;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
