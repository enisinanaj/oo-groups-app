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
