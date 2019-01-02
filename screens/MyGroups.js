import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import MyGroupsCard from '../components/MyGroupsCard';


export default class MyGroups extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'My Groups',
        };
      };

  render() {
    
    return (
        <ScrollView style={styles.container}>
            <MyGroupsCard groupProfilePicture={require('../images/tree.jpeg')} groupCategory={'Nature'} accessibility={'Aperto'}name={'Earthlings'}/>
            <MyGroupsCard groupProfilePicture={require('../images/soccercup.jpeg')} groupCategory={'Calccio'} accessibility={'Chiuso'}name={'JuventinoClub'}/>
            <MyGroupsCard groupProfilePicture={require('../images/robot.jpeg')} groupCategory={'Technology'} accessibility={'Aperto'}name={'Tech'}/>
        </ScrollView>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      backgroundColor: 'white',
      paddingBottom:10,
    },
})
