import React from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { TabNavigator, TabBarBottom, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
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
import NewGroupModal from './components/NewGroupModal';
import SelezioneCategoriaGruppo from './screens/SelezioneCategoriaGruppo';
import SottoCategorieGruppo from './screens/SottoCategorieGruppo';
import Colors from './constants/Colors';

const RNFS = require('react-native-fs');

  const HomeStack = createStackNavigator(
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

  const NewGroupStack = createStackNavigator(
    {
      NewGroup: {
        screen: NewGroupModal,
        navigationOptions: ({navigation}) => {
          return {
            headerTitle: 'Nuovo Gruppo',
            headerLeft: () => {
              return (<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text style={{marginLeft: 13, fontSize: 17, color: Colors.main}}>Indietro</Text>
              </TouchableOpacity>)
            }
          }
        }
      },
      SelezioneCategoriaGruppo: {
        screen: SelezioneCategoriaGruppo
      },
      SottoCategorieGruppo: {
        screen: SottoCategorieGruppo
      }
    },
    {
      initialRouteName: 'NewGroup',
    }
  )

  const InnerProfile = createStackNavigator( {
    Profile:{
      screen: MyProfile,
      navigationOptions: {
        header: null
      }
    },
    NewGroup: {
      screen: NewGroupStack
    }
  }, {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Profile'
  })

  const ProfileStack = createStackNavigator(
    {
      Profile:{
        screen: InnerProfile,
        navigationOptions: () => {
          return {
            header: null
          }
        }
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
      initialRouteName: 'Profile'
    }
  );

  const GroupsStack = createStackNavigator(
    {
      MyGroups:{
          screen: MyGroups,
      },
    },
    {
      initialRouteName: 'MyGroups',
    }
  )

  const NotificationsStack = createStackNavigator(
    {
      Notifications:{
          screen: NotificationsScreen,
      },
    },
    {
      initialRouteName: 'Notifications',
    }
  )
  
  const PostStack = createStackNavigator(
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
    Posts:{screen: PostStack},
    Groups:{ screen: GroupsStack},
    Home: { screen: HomeStack },
    Notifications:{screen: NotificationsStack},
    Profile: { screen: ProfileStack },
  },
  {
    navigationOptions: ({ navigation, header }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <SimpleLineIcons name={'home'} size={29} color={tintColor} />;

        } else if (routeName === 'Posts') {
          return <SimpleLineIcons name={'layers'} size={25} color={tintColor} />;
        } else if (routeName === 'Groups') {
          return <SimpleLineIcons style={{marginRight:7}} name={'compass'} size={29} color={tintColor}/>;
        } else if (routeName === 'Notifications') {
          return <NotificationComponent color={tintColor} />;
        } else if (routeName === 'Profile') {
          return <IconAvatar focused={focused} smallAvatar={{uri: User.getInstance().user.foto_profilo}}/>;
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
    initialRouteName: 'Profile'
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
            User.getInstance().setUser(responseJson[0]);
            
            if (User.getInstance().user.tos_accettato == false) {
              this.setState({
                loading: false,
                loginInitialRouteName: 'Terms'
              });
            } else if (User.getInstance().user.foto_profilo == undefined 
              || Object.keys(User.getInstance().user.foto_profilo).length == 0
              || User.getInstance().user.username == undefined 
              || User.getInstance().user.username == "" ) {

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