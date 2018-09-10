/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Platform, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import GroupSuggestions from './screens/GroupSuggestions';
import HomeFeed from './screens/HomeFeed';
import HomeStack from './navigation';
import MyProfile from './screens/MyProfile';

export default StackNavigator({
    Home: {screen: HomeStack},
    Profile: {screen: MyProfile},
    Groups: {screen: GroupSuggestions},
    Posts:{screen: HomeFeed} 
  },
  {
    headerMode: 'none'
  }
);