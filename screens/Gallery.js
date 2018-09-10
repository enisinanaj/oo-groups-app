import React, {Component} from 'react';
import { StyleSheet,ScrollView, View, Text, } from 'react-native';
import GalleryImage from '../components/GalleryImage';


export default class Gallery extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
            headerTitle: 'Media',
        };
      };
    constructor(props) {
        super(props);
    }


  render() {
    return (
    <ScrollView style={{flexDirection:'column', padding:5}}>
        <View style={styles.container}>
            <GalleryImage image={require('../images/stadium.jpeg')}/>
            <GalleryImage image={require('../images/drone.jpeg')}/>
            <GalleryImage image={require('../images/poppyflower.jpeg')}/>
            
        </View>
        <View style={styles.container}>
            <GalleryImage image={require('../images/soccercup.jpeg')}/>
            <GalleryImage image={require('../images/tree.jpeg')}/>
            <GalleryImage image={require('../images/food.jpeg')}/>
        </View>
    </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    backgroundColor:'white',
},

});
