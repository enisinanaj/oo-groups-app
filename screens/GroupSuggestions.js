import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity,} from 'react-native';
import OpenGroup from '../components/OpenGroup';
import {NavigationSingleton} from './login'
import Colors from '../constants/Colors';
import APIConsts from '../constants/APIConsts';


export default class GroupSuggestion extends React.Component {
    static navigationOptions = {
        //header: null
        title: "Scegli i gruppi da seguire"
      };
    
    constructor(props) {
        super(props);
    
        this.state = { 
            groups: []
        }
    }

    componentDidMount() {
        // call URL and get response from server
        fetch(APIConsts.apiEndpoint + "/gruppo")
        
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
    <View style={{flex:1, backgroundColor: Colors.backgroundColor}}>
        <View style={{padding:10, backgroundColor: 'white', borderBottomColor: Colors.lightBorder, borderBottomWidth: 1}}>
            <Text style={{fontSize:13, marginHorizontal: 10}}>Ecco i gruppi che potrebbero incontrare il tuo interesse </Text>
        </View>
        <ScrollView style={styles.container}>

            {this.renderGroups()}

        </ScrollView>
        <View style={{paddingTop: 10, borderTopColor: Colors.lightBorder, borderTopWidth: 1, backgroundColor: 'white'}}>
            <Text style={{marginHorizontal: 20, fontSize: 13}}>Potrai trovare i gruppi anche successivamente nella sezione ricerca</Text>
            <View style={{flexDirection:'row', height:50, paddingHorizontal:20 ,justifyContent:'space-between'}}>
                <TouchableOpacity>
                    <Text style={styles.buttons}>Salta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.goToProtectedViews()}>
                    <Text style={styles.buttons}>Avanti</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: Colors.backgroundColor,
      paddingBottom:10,
    },
    buttons:{
        fontSize:18, 
        marginTop: 10, 
        fontWeight:'bold', 
        color:Colors.main
    },

})
