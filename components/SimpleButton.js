import React, {Component} from 'react';
import { StyleSheet, Text, Modal, TouchableHighlight, View, ScrollView,TouchableOpacity, TextInput,Image} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import CategoryPicker from './CategoryPicker';
import Colors from '../constants/Colors';



export default class SimpleButton extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            modalVisible: false,
            mediaModalVisibe:false,
            selected: [],
            num:0,
            image:'',
            selectedCategory:'Default',
            text:'',
            checkedPrivate: true,
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
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor:'white', height:50}}>
                <Text style={{color:Colors.alert, fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
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
                animationType="none"
                transparent={false}
                visible={this.state.mediaModalVisibe}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'white'}} onPress={() => {this.setState({mediaModalVisibe:false})}}>
                    <Text style={{color: Colors.main, backgroundColor:'white', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                </TouchableHighlight>
                
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={'white'}
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
                        <Text style={styles.buttonText}>{this.state.title}</Text>
                    </View>
                </TouchableOpacity>

                <Modal
                    animationType="none"
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
                                <Text style={{fontSize:20, color: Colors.main, marginTop:10, marginLeft:10}}>Cancel</Text>
                            </TouchableOpacity>

                            <View style={{padding:10, alignItems:'center',borderBottomWidth:1, borderBottomColor: Colors.lightBorder,}}>
                                <Text style={{fontSize:18, fontWeight:'bold'}}>Condividi con averagejuventinoguy</Text>
                            </View>
                        </View>
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
                            <TouchableOpacity style={styles.shareButton}>
                                <Text style={{color: Colors.main, fontSize:22,}}>Condividi</Text>
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
    borderColor: Colors.profileBorder,
    borderWidth:1,
    borderRadius:5,
    justifyContent:'center',
    
},
buttonText: {
    fontSize:17,
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
