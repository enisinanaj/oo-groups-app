import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, height, View, Image, ScrollView, TextInput,TouchableOpacity, Button} from 'react-native';
import InteresCard from '../components/interestCard';



export default class ChooseInterests extends React.Component {
    static navigationOptions = {
        header: 
          null
      };
    
    constructor(props) {
        super(props);
    
        this.state = { 
            welcomeMessage:'Ciao nome utente, facci sapere cosa ti piace e ti consiglieremo i gruppi che potrebbero piacerti!',
            politics:{uri: 'https://st.ilfattoquotidiano.it/wp-content/uploads/2018/07/05/Senato-675x275.jpg'},
            music:{uri: 'https://www.etonline.com/sites/default/files/styles/840x470/public/images/2018-06/untitled-2-recovered.jpg?itok=NMp9Ztcn&h=c673cd1c'},
            calcio:{uri: 'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'}

        }
    }


  render() {
    
    return (
      <View style={styles.container}>
          
        <Text style={{fontSize:20, marginTop: 30, margin:20,}}>{this.state.welcomeMessage}</Text>
        <ScrollView style={{flexDirection:'column'}}>
            <View>
                <InteresCard image={'https://cdn.images.express.co.uk/img/dynamic/67/590x/Lionel-Messi-975313.jpg?r=1529221257744'} 
                    title={'CALCIO'}/>
            </View>
            <View>
                <InteresCard image={'https://www.etonline.com/sites/default/files/styles/840x470/public/images/2018-06/untitled-2-recovered.jpg?itok=NMp9Ztcn&h=c673cd1c'} 
                    title={'MUSICA'}/>              
            </View>
            <View>
                <InteresCard image={'https://st.ilfattoquotidiano.it/wp-content/uploads/2018/07/05/Senato-675x275.jpg'} 
                    title={'POLITICA'}/>                
            </View>
        </ScrollView>

            <View style={{flexDirection:'row', paddingHorizontal:20 ,justifyContent:'space-between'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('GroupSuggestions')}>
                    <Text style={styles.buttons}>SALTA</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('GroupSuggestions')}>
                    <Text style={styles.buttons}>AVANTI</Text>
                </TouchableOpacity>
          </View>
      </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      paddingBottom:10
    },

    image:{
        height:130, 
        marginTop:10, 
        marginHorizontal:8
    },

    imageCover:{
        height:140,
        width:360,
        marginTop:10, 
        marginHorizontal:8,
        backgroundColor:'white',
        opacity:0.2,
        position:'absolute',
    },
    coverText:{
        fontSize:60, 
        alignSelf:'center',
        color:'#6342F7',
        position: 'absolute',
        marginTop:20,
        opacity:0.8,
    },

    buttons:{
        fontSize:25, 
        marginTop: 10, 
        fontWeight:'bold', 
        color:'#2E86C1'
    },
})
