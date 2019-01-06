import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import APIConsts from '../constants/APIConsts';
import ProfilePicture from '../components/ProfilePicture';

export default GroupProfileHeader = (props) => {
    let {group} = props;

    return (
        <View style={styles.profileIntro}>
            <Image style={styles.coverImage} 
                source={{uri: APIConsts.apiEndpoint + group.immagine_copertina.url}} />
            <View style={styles.headerBar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{marginLeft: 10, width: 30}}></View>
                    <Text style={{color: 'white', fontWeight: '800', textAlign: 'center'}}>{group.nome}</Text>
                    <TouchableOpacity style={{marginRight: 10, width: 30}}
                        onPress={() => props.navigation.navigate("Settings", {updateParentState: () => this.updateState()})}>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop: 70}}>
                <ProfilePicture image={{uri: APIConsts.apiEndpoint + group.immagine_profilo.url}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({ 
    coverImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 210
    },

    headerBar: {
        top: 20,
        left: 0,
        right: 0,
        justifyContent: 'center',
        position: 'absolute',
        height: 44
    },

    username: {
        fontSize: 24,
        marginTop: 5,
        color: '#4e4e4e',
        textAlign: 'center',
        // marginBottom: 20
    },

    profileIntro: {
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        // marginBottom: 20
    },
});
