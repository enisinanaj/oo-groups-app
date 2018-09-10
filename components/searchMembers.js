import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, TextInput, TouchableOpacity, Animated, Easing} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



export default class SearchMembers extends Component {
    constructor(props) {
        super(props);

        this.state={
            isFocused: false,
            isBlured: false,
            text: '',
            searchWidth: new Animated.Value(40)
        }
    }

    openSearch() {
        this.setState({isFocused: true});

        Animated.timing(this.state.searchWidth, {
            easing: Easing.bounce,
            toValue: 200,
            duration: 400
        }).start();
    }


    renderIcon(){
        return(
            <View>
                <EvilIcons style={{position:'absolute', marginLeft:-43, marginTop:8}} name={'search'} color={'gray'} size={25} />
            </View>
        )
    }

  render() {
    return (
        <Animated.View style={{flexDirection:'row', width: this.state.searchWidth, marginRight: 0}}>
            <TextInput
                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
                maxLength = {60}
                keyboardAppearance={true}
                onFocus= {() => this.openSearch()}
                onBlur= {() => this.setState({isFocused: false})}
                style={styles.container}
            />
            {this.state.isFocused? null : this.renderIcon() }
        </Animated.View>
    );
  }
  
}




const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderColor: '#E5E8E8',
        borderRadius: 15,
        alignSelf: 'flex-end',
        paddingLeft: 5,
        marginBottom: 5
    },
});
