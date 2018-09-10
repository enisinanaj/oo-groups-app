import React, {Component} from 'react';
import { StyleSheet, ScrollView,} from 'react-native';
import SubscribeRequestCard from '../components/SubscriptionRequestCard';



export default class SubscribeRequests extends React.Component {

    constructor(props) {
        super(props);
    }

    

  render() {
    return (

        <ScrollView style={styles.container}>
               <SubscribeRequestCard user={'Mario Rossi'}/>
               <SubscribeRequestCard user={'Mario Rossi'}/>
        </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    flex:1,
    padding:10,
    backgroundColor:'white',
},

});
