import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export default class MediumSimpleButton extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.simpleButton}>
                    <Text style={styles.buttonText}> {this.state.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    simpleButton:{
        backgroundColor:'transparent',
        flexDirection:'row',
        alignItems:'center',
        width:170,
        height:30,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:5,
        justifyContent:'center',
    },
    buttonText: {
        fontSize:15,
    },
});
