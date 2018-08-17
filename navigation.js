import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import { StackNavigator } from 'react-navigation';
import Login from './screens/login';
import Terms from './screens/terms';
import MyProfile from './screens/MyProfile';
import HomeFeed from './screens/HomeFeed';
import GroupSuggestions from './screens/GroupSuggestions';
import AdminView from './screens/AdminView';
import IconAvatar  from './screens/IconAvatar';
import NotificationComponent from './screens/NotificationComponent';
import ChooseInterests from './screens/ChooseInterests';
import UsernameSetUp from './screens/UsernameSetUp';
import Posts from './screens/Posts';


  const HomeStack = StackNavigator(
    {
      Home: {
        screen: HomeFeed,
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
    },
    {
      initialRouteName: 'Profile',
    }
  );
  const GroupsStack = StackNavigator(
    {
    GroupSuggestions:{
        screen: GroupSuggestions,
    },
  
  },
    {
      initialRouteName: 'GroupSuggestions',
    }
  
  )
  const NotificationsStack = StackNavigator(
    {
      AdminView:{
          screen: AdminView,
      },
  
  },
    {
      initialRouteName: 'AdminView',
    }
  
  )
  
  const PostStack = StackNavigator(
    {
      Posts:{
          screen: Posts,
      },

    }, 
    {
      initialRouteName: 'Posts',
    }
  )

  const LoginStack = StackNavigator(
    {
      Login: {
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
      initialRouteName: 'Login',
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
            return <IconAvatar/>;

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
    animationEnabled: true,
    swipeEnabled: false,
  }
);

//NavigationSingleton.instance.navigate("ProtectedViews");

export default StackNavigator({
  UnprotectedViews:{
      screen: LoginStack,
  },
  ProtectedViews:{
    screen: HomeNavigation,
  },
}, {
  initialRouteName: 'UnprotectedViews',
  headerMode: 'none',
  navigationOptions: () => ({
    gesturesEnabled: false
  })
})