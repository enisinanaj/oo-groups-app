import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, ScrollView,Text,View,} from 'react-native';
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
                <TouchableOpacity style={{ padding:10,backgroundColor:'white', alignItems:'center', flexDirection:'row',borderBottomWidth:1,borderColor:'#E5E8E8',}}>
                    <Text style={{fontSize:13,}}>You have</Text>
                    <Text style={{fontSize:13, fontWeight:'bold'}}> 25 new member requests</Text>
                </TouchableOpacity>
            <NotificationCard  user ={'Leandrolombardo'} activityType={'commented on'}/>
            <NotificationCard  user ={'LoremIpsum'} activityType={'liked '}/>
            <NotificationCard  user ={'Juventino'} activityType={'disliked '}/>
            <SubscribedCard user ={'Juventino'}/>
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
