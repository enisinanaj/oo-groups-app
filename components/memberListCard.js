import React, {Component} from 'react';
import { StyleSheet, Width,Text, Modal, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import ActionsOnMembers from './ActionsOnMember';


export default class MemberListCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            modalVisible: false
        }
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


  render() {
    return (

        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                <Image
                    style={{width:30, height:30,borderRadius:15, marginTop:10, margin:3}}
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAY9qT1yDcDUsmui17nxZepUbRNF64rEFPSjjdJpskW4cx4iA-Q'}}
                />
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{fontWeight:'bold', fontSize: 12,marginTop:20, marginLeft:10,}}>{this.props.user}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}} style={{alignSelf:'flex-end',marginRight:10}}>
                <Entypo  name={'dots-three-horizontal'} size={20} color={'gray'}/>
            </TouchableOpacity>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                    }}>
                    <View style={{backgroundColor:'rgba(255,255,255,0.8)', flex:1}}>
                        <TouchableOpacity
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Text style={{fontSize:18, color:'#85C1E9', marginTop:22, marginLeft:10}}>Cancel</Text>
                        </TouchableOpacity>
                        <ActionsOnMembers/>
                    </View>
                </Modal>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    height:45,
    backgroundColor:'white',
    justifyContent:'space-between',
},

});
