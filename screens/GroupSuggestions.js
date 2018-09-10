import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import OpenGroup from '../components/OpenGroup';
import {NavigationSingleton} from './login'
import Colors from '../constants/Colors';


export default class GroupSuggestion extends React.Component {
    static navigationOptions = {
        header: null
      };
    
    constructor(props) {
        super(props);
    
        this.state = { 
            groups: []
        }

        /*
         groups: [{
            name: "....",
            admin: "...."
        }, {
            name: "...",
            admin: "..."
        }]
        */
    }

    componentDidMount() {
        // call URL and get response from server
        fetch("http://localhost:1337/gruppo")
        
        // get only the BODY part from response
        .then(
            (response) => {
                return response.json();
        })

        // set response object to component State
        .then((responseJson) => {
            this.setState({groups: responseJson})
        })

        // catch eventual errors.
        .catch(e => {
            console.error(e);
        })
    }

    goToProtectedViews() {
        NavigationSingleton.instance.navigate("ProtectedViews");
    }


    renderGroups() {
        return (
            this.state.groups.map( (el, i) => {
                return <OpenGroup key={i} name={el.nome} />
            })
        );
    }

  render() {
    
    return (
    <View style={{flex:1, backgroundColor:'white'}}>
        <View style={{marginTop:10,padding:10}}>
            <Text style={{fontSize:20}}>Ecco i gruppi che potrebbero incontrare il tuo interesse </Text>
        </View>
        <ScrollView style={styles.container}>
      
            {/* <GroupCard />
            <OpenGroup name={'RockandRoll'}/>
            <GroupCard/> */}

            {this.renderGroups()}

        </ScrollView>
        <Text style={{marginHorizontal:25, paddingTop:10,fontSize:14}}> Potrai trovare i gruppi anche successivamente nella sezione ricerca</Text>
        <View style={{flexDirection:'row', height:50, paddingHorizontal:20 ,justifyContent:'space-between'}}>
            <TouchableOpacity>
                <Text style={styles.buttons}>SALTA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.goToProtectedViews()}>
                <Text style={styles.buttons}>AVANTI</Text>
            </TouchableOpacity>
          </View>
    </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      backgroundColor: 'white',
      paddingBottom:10,
    },
    buttons:{
        fontSize:20, 
        marginTop: 10, 
        fontWeight:'bold', 
        color:Colors.main
    },

})
