import React from 'react';
import { StyleSheet, TouchableOpacity, Modal, View, Text} from 'react-native';
import NewPost from './NewPost';
import Colors, { Shadow } from '../constants/Colors';
import OnYourMind from './OnYourMind'
import ButtonBar from './ButtonsBar';
import Feather from 'react-native-vector-icons/Feather'


export default class ShareButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPostModalVisible: false
        }
    }


    toggleModal() {
        this.setState({modalVisible: !this.state.modalVisible})
    }


  render() {
        let buttons = [
            {title: 'Condividi', onPress: () => {this.setState({newPostModalVisible: true})}}
        ]

        return (
            <View style={[styles.onYourMindContainer, Shadow.cardShadow]}>
                <OnYourMind onFocus={() => this.setState({modalPost: true})}/>
                <ButtonBar ref='buttonBar' buttons={buttons}/>
                <Modal
                        animationType="none"
                        transparent={false}
                        visible={this.state.newPostModalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <NewPost group={this.props.group} />
                </Modal>
            </View>
        )
  }
  
}

const styles = StyleSheet.create({
 
    container: {
        margin: 20,
        borderColor: Colors.darkBorder,
        borderWidth: 0.5,
        borderRadius: 5,
    },

    fakeTextInput: {
        fontSize: 16,
        color: Colors.lighterText,
        marginHorizontal: 15,
        marginVertical: 10
    },

    onYourMindContainer: {
        marginTop: 10,
        marginBottom: 6,
        marginRight: 7,
        marginLeft: 7,
        padding: 0,
        borderRadius: 14,
    },

});
