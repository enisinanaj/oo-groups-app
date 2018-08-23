import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity, Modal} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import PostOptionsAdmin from './PostOptionsAdmin';



export default class PostHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            category: this.props.category,
            date:this.props.date,
            image:{uri: this.props.image},
            modalVisible:false, 
        }

    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

  render() {
    return (
    
    <View style={styles.container}>
        <Image
            style={{width:55, height:55, margin: 10,borderRadius:28}}
            source={{uri:'https://lagiornatasportiva.it/wp-content/uploads/2018/02/cristiano-ronaldo-net-worth.jpg'}}   />
        <View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:285}}>
                <TouchableOpacity onPress={() => this.props.onPress()}>
                    <Text style={{fontWeight:'bold',fontSize:20, flex:1, marginTop:10}}>{this.state.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={{alignSelf:'flex-end'}}>
                    <Entypo style={{marginLeft:20, marginTop:3}} name={'chevron-small-down'} size={30} color={'gray'} />
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
                        <PostOptionsAdmin/>
                    </View>
                </Modal>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity style={styles.category}>
                    <Text style={{fontSize:13, fontWeight:'bold'}}>{this.state.category}</Text> 
                </TouchableOpacity>
                <View style={{flexDirection:'row', paddingTop:2}}>
                    <Entypo name={'dot-single'} size={20} color={'black'} />
                    <Text style={{color:'gray', fontSize:16}}>{this.state.date}</Text>
                </View>
            </View>
        </View>
    </View>
   
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'row',
    padding:10,
},
smallContainer:{
    borderWidth:1,    
},

options:{
    height:40,
    borderBottomWidth:1,
    borderColor:'#E5E8E8',
    paddingTop:10,
    
},
optionsText:{
    fontSize:18,
    color:'#566573',
    alignSelf:'center',
},
category:{
    marginTop:5,
},
});
