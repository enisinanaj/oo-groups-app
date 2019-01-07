import React, {Component} from 'react';
import { StyleSheet, Text, Modal, TouchableHighlight, View, ScrollView,TouchableOpacity, TextInput,Image} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CategoryPicker from './CategoryPicker';
import Colors from '../constants/Colors';

export default class NewPost extends React.Component {
    static navigationOptions = () => {
        return {
          headerTitle: 'Nuovo Post'
        }
    }

    constructor(props) {
        super(props);
    
        this.state = {
            modalVisible: false,
            num:0,
            group: this.props.navigation.state.params.group
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    
    setMediaModalVisible(visible){
        this.setState({mediaModalVisibe: visible})
    }

    render() {
        return (
            <View style={{backgroundColor:'white', flex:1}}>
                <View style={{alignItems:'center', paddingTop:20, paddingBottom:20,borderBottomWidth:1, borderBottomColor: Colors.profileBorder,}}>
                    <CategoryPicker title={'Seleziona categoria'} />
                </View>

                <View style={{color:'transparent',marginLeft:10, flexDirection: 'column'}}>
                        <TextInput 
                            style={{fontSize:15, height:40, marginTop:10, backgroundColor:'white', marginRight:10, paddingLeft:10}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            multiline={'true'}
                            placeholder={'Cosa vuoi condividere?'}
                        />
                    <Image style={{height: 190, marginTop:10, marginLeft:3, width:350}}
                        source={this.state.selected}>
                    </Image>
                </View>

                <View style={{alignSelf:'center', alignItems:'center', marginTop:10}}>
                    <Text style={{color:'gray'}}>Allega</Text>

                    <TouchableOpacity style={styles.options} onPress={() => {}}>
                        <Text style={styles.optionsText}>{this.state.selected==''? 'Media': 'Selected'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.optionsText}>File</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.optionsText}>Sondaggio</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton}>
                        <Text style={{color: Colors.main, fontSize:22,}}>Condividi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
  
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
 
    simpleButton:{
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        borderTopWidth: 0.5,
        borderTopColor: '#e5e5e5'
    },

    buttonText: {
        fontSize: 14,
        color: Colors.darkTitle,
        fontWeight: '600'
    },

    shareButton:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        width:250,
        height:40,
        borderColor: Colors.lightBorder,
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
        marginTop:20,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        shadowColor:'#ABB2B9',
    },
    options:{
        marginTop:10,
    },

    optionsText:{
        fontSize:20,
    },
});
