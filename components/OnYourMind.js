/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    TextInput,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import User from '../controllers/user/instance';
import Colors from '../constants/Colors';

export default class OnYourMind extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
        }
    }

    componentDidMount() {
        this.loadFonts();
    }

    async loadFonts() {
        this.setState({isReady: true});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Image source={{uri: User.getInstance().user.foto_profilo}} style={styles.profile}/>
                </View>
                <TextInput onFocus={() => this.props.onFocus()} style={styles.input}
                    placeholder={"Condividi la tua opinione con il gruppo..."}
                    placeholderTextColor={Colors.darkTitle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        backgroundColor: Colors.white,
        borderRadius: 15,
        // borderTopRightRadius: 15,
        marginHorizontal: 10
    },

    input: {
        flex: 1,
        fontSize: 16,
        height: 23,
        marginLeft: 8,
        marginRight: 15,
        color: Colors.lighterText
    },

    profile: {
        backgroundColor: 'transparent',
        marginLeft: 15,
        height: 40,
        width: 40,
        borderRadius: 20
    }
})