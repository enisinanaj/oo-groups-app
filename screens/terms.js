import React, {Component} from 'react';
import {StyleSheet,Text, ScrollView, View, TouchableOpacity, Dimensions} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';

export default class Terms extends React.Component {
    static navigationOptions = {
        title: 'Termini e condizioni',
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    constructor() {
        super();
    
        this.state = {
            checked: false,
            terms:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum..Lorem ipsum dolor sit amet, consectetur adipiscing eli. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum... Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum..Lorem ipsum dolor sit amet, consectetur adipiscing eli. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum..Lorem ipsum dolor sit amet, consectetur adipiscing eli. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum'
        }
    }

    hideShowCheck(){
        this.setState({checked: !this.state.checked})
    } 
  render() {
    
    return (
      <View style={styles.container}> 
        <ScrollView>
            <Text style={styles.textBox}>{this.state.terms}</Text>
        </ScrollView>
        <View style={styles.privacyArea}>
            <CheckBox
                onIconPress={() => this.hideShowCheck()}
                checked={!this.state.checked}
                center
                checkedColor={Colors.main}
                checked={this.state.checked}
                containerStyle={{width: 43, backgroundColor: 'transparent', borderColor: 'transparent'}}
            />
            <TouchableOpacity onPress={() => this.hideShowCheck()} style={{marginRight: 10, marginTop: 10, position: 'relative', left: -20}}>
                <Text style={{fontSize: 14, marginRight: 15, fontWeight: 'bold'}}>Dichiaro di aver letto e di accettare i termini e le condizioni</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity disabled={!this.state.checked} onPress={() => this.props.navigation.navigate('UsernameSetUp')}> 
            <Text style={[styles.next, this.state.checked? styles.enabled : styles.disabled]}>Avanti</Text>
        </TouchableOpacity>
      </View>
    )
}
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.backgroundColor,
    },
    next: {
        fontSize:18, 
        alignSelf:'flex-end', 
        marginRight: 30,
        marginBottom: 30,
        fontWeight: 'bold'
    },
    disabled: {
        color: Colors.inactive,
    },
    enabled: {
        color: Colors.main,
    },
    title: {
        marginTop: 40,
        alignSelf: 'center',
        fontSize: 20,
        color: 'black',
    },
    textBox: {
        marginTop: 20,
        padding: 20,
        fontSize: 13,
        fontStyle: 'italic'
    },
    privacyArea: {
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 5,
        width: Dimensions.get('window').width - 20,
        paddingTop: 15,
        borderTopColor: Colors.lightBorder,
        borderTopWidth: 1
    }
})
