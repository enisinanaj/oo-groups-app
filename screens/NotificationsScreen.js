import React, {Component} from 'react';
import { StyleSheet, ScrollView,} from 'react-native';
import NotificationCard from '../components/NotificationCard';
import SubscribedCard from '../components/SubscribedCard';




export default class NotificationsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        headerTitle: 'Notifications',
        };
      };
        
    constructor(props) {
        super(props);
    }



  render() {
    return (

        <ScrollView style={styles.container}>
            <NotificationCard  postImage={require('../images/tree.jpeg')} smallprofilepicture={require('../images/user.jpg')} user ={'Leandrolombardo'} activityType={'commented on'}/>
            <NotificationCard  postImage={require('../images/streetfood.jpeg')} smallprofilepicture={require('../images/profilepicturegirl.jpeg')} user ={'LoremIpsum'} activityType={'liked '}/>
            <NotificationCard  postImage={require('../images/poppyflower.jpeg')} smallprofilepicture={require('../images/profilepicture.jpeg')} user ={'Juventino'} activityType={'disliked '}/>
            <SubscribedCard smallprofilepicure={require('../images/user.jpg')} user ={'Juventino'}/> 
        </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    flex:1,
},

});
