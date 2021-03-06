import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { TabNavigator, TabBarBottom, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { StackNavigator } from 'react-navigation';
import Login from './screens/login';
import Terms from './screens/terms';
import MyProfile from './screens/MyProfile';
import HomeFeed from './screens/HomeFeed';
import GroupSuggestions from './screens/GroupSuggestions';
import AdminView from './screens/AdminView';
import IconAvatar  from './components/IconAvatar';
import NotificationComponent from './components/NotificationComponent';
import ChooseInterests from './screens/ChooseInterests';
import UsernameSetUp from './screens/UsernameSetUp';
import Posts from './screens/Posts';
import CompletePostCard from './screens/CompletePostCard';
import NotificationsScreen from './screens/NotificationsScreen';
import MemberView from './screens/memberView';
import ListMembers from './screens/ListMembers'
import Settings from './screens/Settings';
import MyGroups from './screens/MyGroups';
import Gallery from './screens/Gallery';
import SubscribeRequests from './screens/SubscribeRequests';
import SettingsGroups from './screens/SettingsGroups';
import PostRequests from './screens/PostRequests';

import User from './controllers/user/instance';
import APIConsts from './constants/APIConsts';

const RNFS = require('react-native-fs');

  const HomeStack = StackNavigator(
    {
      Home: {
        screen: HomeFeed,
      },
      SinglePost: {
        screen: CompletePostCard
      },
      ListMembers:{
        screen: ListMembers,
      },
      MemberView:{
        screen: MemberView,
      },
      Gallery:{
        screen: Gallery
      },
      
    },
    {
      initialRouteName: 'Home',
    }
  );

  const ProfileStack = StackNavigator(
    {
      Profile:{
          screen: MyProfile,
      },
      AdminView:{
        screen: AdminView,
      },
      ListMembers:{
        screen:ListMembers,
      },
      Settings:{
        screen: Settings
      },
      SettingsGroups:{
        screen: SettingsGroups
      },
      SubscribeRequests:{
        screen: SubscribeRequests
      },
      PostRequests:{
        screen: PostRequests
      },
    },
    {
      initialRouteName: 'Profile',
    }
  );

  const GroupsStack = StackNavigator(
    {
    MyGroups:{
        screen: MyGroups,
    },
  },
    {
      initialRouteName: 'MyGroups',
    }
  )

  const NotificationsStack = StackNavigator(
  {
      Notifications:{
          screen: NotificationsScreen,
      },
  },
    {
      initialRouteName: 'Notifications',
    }
  )
  
  const PostStack = StackNavigator(
    {
      Posts:{
          screen: Posts,
      },
      CompletePostCard:{
        screen: CompletePostCard
      },

    }, 
    {
      initialRouteName: 'Posts',
    }
  )

  const createLoginStack = (initialRouteName) => createStackNavigator(
    {
      Login:{
        screen: Login,
      },
      UsernameSetUp: {
        screen: UsernameSetUp,
      },
      ChooseInterests: {
        screen: ChooseInterests
      },
      GroupSuggestions: {
        screen: GroupSuggestions
      },
      Terms: {
        screen: Terms,
      },
    }, {
      initialRouteName: initialRouteName
    }
  )

  const HomeNavigation = TabNavigator(
  {
    Home: { screen: HomeStack },
    Posts:{screen: PostStack},
    Groups:{ screen: GroupsStack},
    Notifications:{screen: NotificationsStack},
    Profile: { screen: ProfileStack },
  },
  {
    navigationOptions: ({ navigation, header }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          return <Entypo name={'home'} size={29} color={tintColor} />;

        }else if (routeName === 'Posts') {
          return <FontAwesome name={'file-text'} size={25} color={tintColor} />;
        }else if (routeName === 'Groups') {
            return <FontAwesome style={{marginRight:7}} name={'user-circle-o'} size={29} color={tintColor}/>;
          }
          else if (routeName === 'Notifications') {
            return <NotificationComponent/>;
          }
          else if (routeName === 'Profile') {
            return <IconAvatar smallAvatar={require('./images/profilepicture.jpeg')}/>;

          }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        //return <Ionicons name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#212F3C',
      inactiveTintColor: 'gray',
      showLabel:false,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);


class MainNavigationComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const LoginStack = createLoginStack(this.props.loginInitialRouteName)

    const MainNavigation = createStackNavigator({
      UnprotectedViews:{
          screen: LoginStack,
      },
      ProtectedViews:{
        screen: HomeNavigation,
      },
    }, {
      initialRouteName: this.props.initialRouteName,
      headerMode: 'none',
      navigationOptions: () => ({
        gesturesEnabled: false
      })
    })

    return <MainNavigation />
  }
}

export default class MainNavigation extends React.Component {

  constructor() {
    super();

    this.state = {
      initialRouteName: 'UnprotectedViews',
      loginInitialRouteName: 'Login',
      loading: true
    }
  }

  componentDidMount() {
    const path = RNFS.DocumentDirectoryPath + '/.user/.profile';
    RNFS.readFile(path).then(contents => {
        User.getInstance().user.email = contents.split("\n")[1];

        fetch(APIConsts.apiEndpoint + "/utente?indirizzo_email=" + User.getInstance().user.email)
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.length > 0) {
            User.getInstance().user = responseJson[0];
            
            if (User.getInstance().user.tos_accettato == false) {
              this.setState({
                loading: false,
                loginInitialRouteName: 'Terms'
              });
            } else if (User.getInstance().user.foto_profilo == undefined 
              || Object.keys(User.getInstance().user.foto_profilo).length == 0
              || User.getInstance().user.username == undefined 
              || User.getInstance().user.username == "" ) {

              User.getInstance().user.foto_profilo = APIConsts.apiEndpoint + User.getInstance().user.foto_profilo.url
              this.setState({
                loading: false,
                loginInitialRouteName: 'UsernameSetUp',
              });

            } else {
              this.setState({
                loading: false,
                loginInitialRouteName: 'Login',
                initialRouteName: 'ProtectedViews'
              });
            }
          } else {
            this.setState({loading: false});
          }
        })
    })
  }

  render() {
    if (this.state.loading) {
      return (<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <ActivityIndicator />
        </View>
      </View>)
    }
    return (
      <MainNavigationComponent initialRouteName={this.state.initialRouteName} loginInitialRouteName={this.state.loginInitialRouteName} /> )
  }
}