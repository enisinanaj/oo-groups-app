/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

//import {Font, AppLoading} from 'expo';
import Colors from '../constants/Colors';
import DisabledStyle from '../constants/DisabledStyle';

export default class ButtonBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: props.buttons,
            isReady: false
        };
    }
    
    componentDidMount() {
        this.loadFonts();
    }

    async loadFonts() {
        this.setState({isReady: true});
    }

    renderButtons() {
        const {buttons} = this.state;
        return buttons.map((button, i) => {
            return (
                <View key={i} style={styles.buttonItem}>
                    <View onPress={button.onPress} style={button.noOp ? DisabledStyle.disabled : {}}>
                        <Text style={styles.text}>{button.title}</Text>
                    </View>
                </View>
            )
        })

    }

    render() {
        return (
            <View ref='container'>
                <Animated.View style={[styles.container]}>
                    {this.renderButtons()}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        backgroundColor: Colors.white,
        borderTopWidth: 1,
        borderColor: '#f5f5f5',
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
    },

    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0
    },

    text: {
        fontSize: 14,
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: Colors.main,
    }
});