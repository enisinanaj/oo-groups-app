import React from 'react';
import { StyleSheet, View, TouchableOpacity, Linking } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import User from '../controllers/user/instance';
import ContactTypes from '../constants/ContactTypes';


export default class ProfileContacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contacts: User.getInstance().user.contatti
        }
    }

    openUrl(contact) {
        let fullContactUrl = ContactTypes.getFullContactUrlForContact(contact);

        Linking.canOpenURL(fullContactUrl)
        .then((suported) => {
            if (suported) {
                Linking.openURL(fullContactUrl);
            }
        }).catch(e => console.error(e))
    }

    renderContacts() {
        const render = [];

        if (this.state.contacts == undefined) {
            return null
        }

        this.state.contacts.forEach((contact, i) => {
            let contactType = ContactTypes.getNameForKey(contact.tipocontatti);

            render.push(<TouchableOpacity key={i} style={{margin:5}} onPress={() => this.openUrl(contact)}>
                <FontAwesome name={contactType.replace("Username", "")} size={20} color={'#000'}/>
            </TouchableOpacity>);
        })

        return render;

    }

  render() {
    return (
        <View style={styles.container}>
            {this.renderContacts()}
        </View>
    );
  }
 
}

const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    justifyContent:'center',
},

});
