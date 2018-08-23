import React, {Component} from 'react';
import {Platform, StyleSheet, Width,Text, Modal, TouchableHighlight,height, View, Image, TouchableOpacity, Button} from 'react-native';
import MediumSimpleButton from './MediumSimpleButton';
import CameraRollPicker from 'react-native-camera-roll-picker';


export default class SimpleButton extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            modalVisible: false,
            mediaModalVisibe:false,
            selected:'',
            num:0,
            image:'Media'
        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    
    setMediaModalVisible(visible){
        this.setState({mediaModalVisibe: visible})
    }
    
    getSelectedImages(image, current) {
        var num = image.length;
    
        this.setState({
          num: num,
          selected: image,
        });
    }

    renderSaveButton(){
        return(
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'black', height:50}}>
                <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    }

    newImage(){
        this.setState({
            image:this.state.selected,
            mediaModalVisibe: false
        })
    }

    renderImageSelectedModal() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.mediaModalVisibe}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'black'}} onPress={() => {this.setState({mediaModalVisibe:false})}}>
                    <Text style={{color:'blue', backgroundColor:'black', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                </TouchableHighlight>
                
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={'black'}
                />

                {this.state.num != 0? this.renderSaveButton(): null}
            </Modal>
        )
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                    <View style={styles.simpleButton}>
                        <Text style={styles.buttonText}> {this.state.title}</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                    }}>
                    <View style={{backgroundColor:'white', flex:1}}>
                        <View style={{marginTop: 22, }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text style={{fontSize:20, color:'blue', marginTop:10, marginLeft:10}}>Cancel</Text>
                            </TouchableOpacity>

                            <View style={{padding:10, alignItems:'center',borderBottomWidth:1, borderBottomColor:'#E5E8E8',}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>Condividi con averagejuventinoguy</Text>
                            </View>
                        </View>
                        <View style={{alignItems:'center', paddingTop:20, paddingBottom:20,borderBottomWidth:1, borderBottomColor:'#E5E8E8',}}>
                            <MediumSimpleButton title={'Seleziona categoria'} />
                            
                        </View>
                        <View style={{height:270}}>
                            <Text style={{fontSize:20, marginTop:15, marginLeft:15}}>Cosa vuoi condividere?</Text>
                        </View>
                        <View style={{alignSelf:'center', alignItems:'center'}}>
                            <Text style={{color:'gray'}}>Allega</Text>

                            <TouchableOpacity style={styles.options} onPress={() => {this.setMediaModalVisible(!this.state.mediaModalVisibe)}}>
                                <Text style={styles.optionsText}>{this.state.selected==''? 'Media': 'Selected'}</Text>
                                {this.renderImageSelectedModal()} 
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.options}>
                                <Text style={styles.optionsText}>File</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.options}>
                                <Text style={styles.optionsText}>Sondaggio</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.redSimpleButton}>
                                <Text style={{color:'red', fontSize:22,}}>Condividi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
simpleButton:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
    width:270,
    height:40,
    borderColor:'#ABB2B9',
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
},
buttonText: {
    fontSize:17,
},
redSimpleButton:{
    backgroundColor:'transparent',
    flexDirection:'row',
    alignItems:'center',
    width:270,
    height:40,
    borderColor:'red',
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
    marginTop:20
},
options:{
    marginTop:10,
},

optionsText:{
    fontSize:20,
},
});
