import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import APIConsts from '../constants/APIConsts';
import ProfilePicture from '../components/ProfilePicture';
import Colors from '../constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default GroupProfileHeader = (props) => {
    let {group} = props;

    return (
        <View style={styles.profileIntro}>
            <Image style={styles.coverImage} 
                source={{uri: APIConsts.apiEndpoint + group.immagine_copertina.url}} />
            <View style={styles.headerBar}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{marginLeft: 10, width: 30}}></View>
                    <Text style={{color: 'white', fontWeight: '800', textAlign: 'center', fontSize: 22}}>{group.nome}</Text>
                    <TouchableOpacity style={{marginRight: 10, width: 30}}
                        onPress={() => props.navigation.navigate("Settings", {updateParentState: () => this.updateState()})}>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginTop: 70, flexDirection: 'row', justifyContent: 'flex-start'}}>
                <ProfilePicture image={{uri: APIConsts.apiEndpoint + group.immagine_profilo.url}} />
                <View style={{flexDirection: 'column', justifyContent: 'center', flex: 1, marginLeft: 5}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8,
                            backgroundColor: 'rgba(250,250,250, 0.4)', borderRadius: 12, padding: 4,
                            marginTop: 10}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 20, fontWeight: '800', color: Colors.white, textAlign: 'center'}}>9,7k</Text>
                                <Text style={{fontSize: 16, fontWeight: '500', color: Colors.white, textAlign: 'center'}}>members</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1}}>
                            <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 20, fontWeight: '800', color: Colors.white, textAlign: 'center'}}>9,3/10</Text>
                                <Text style={{fontSize: 16, fontWeight: '500', color: Colors.white, textAlign: 'center'}}>rating</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 15,
                                 backgroundColor: 'rgba(250,250,250, 0.4)', borderRadius: 12, padding: 4}}>
                        <TouchableOpacity style={{margin:5}} onPress={() => {}}>
                            <FontAwesome name={"facebook"} size={20} color={Colors.white}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{margin:5}} onPress={() => {}}>
                            <FontAwesome name={"twitter"} size={20} color={Colors.white}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{margin:5}} onPress={() => {}}>
                            <FontAwesome name={"instagram"} size={20} color={Colors.white}/>
                        </TouchableOpacity>
                    </View>
                </View>
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
