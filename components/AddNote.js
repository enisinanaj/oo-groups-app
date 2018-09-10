import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image,TextInput,Modal,  TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import Colors from '../constants/Colors';


export default class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            mediaModalVisibe:false,
            selected:'',
            num:0,
            image:'Select image',
            focusedTitle: false,
            focusedDescription: false,
            title:'',
            description:'',
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
            <TouchableOpacity onPress={() => this.newImage()} style={{backgroundColor: Colors.backgroundColor, height:50}}>
                <Text style={{color: Colors.alert, fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    }

    newImage(){
        this.setState({
            image:this.state.selected,
            mediaModalVisibe: false
        })
    }
    isFormCompleted(){
        return this.state.title != '' && this.state.description != '' && this.state.num != ''
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
                <TouchableOpacity style={{height:50,backgroundColor: Colors.backgroundColor}} onPress={() => {this.setState({mediaModalVisibe:false})}}>
                    <Text style={{color: Colors.main, backgroundColor: Colors.backgroundColor, fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
                </TouchableOpacity>
                
                <CameraRollPicker
                    callback={this.getSelectedImages.bind(this)}
                    selectSingleItem={true}
                    imageMargin={2}
                    backgroundColor={ Colors.backgroundColor}
                />

                {this.state.num != 0? this.renderSaveButton(): null}
            </Modal>
        )
    }

  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity  style={{ flex:0.8, alignItems:'center'}}>
                <Text style={{fontSize:18, marginTop:5, marginRight:10}}>notes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={{ flex:0.2, alignItems:'center'}}>
                <Text style={{fontSize:18, marginTop:5}}>+ add</Text>
            </TouchableOpacity>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                    alert('Modal has been closed.');
                    }}>
                    <View style={{backgroundColor:'white', flex:1}}>
                        <TouchableOpacity
                            onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Text style={{fontSize:18, color: Colors.main, marginTop:22, marginLeft:10}}>Cancel</Text>
                        </TouchableOpacity>

                        <View style={{alignItems:'center', flexDirection:'column',marginTop:150, backgroundColor: Colors.backgroundColor}}>
                            <View>
                                <TextInput
                                    placeholder={'Title'}
                                    value={this.state.title}
                                    onChangeText={(newText) => this.setState({title:newText})}
                                    onFocus= {() => this.setState({focusedTitle: true})}
                                    onBlur= {() => this.setState({focusedTitle:false})}
                                    editable = {true}
                                    keyboardAppearance={true}
                                    maxLength = {40}
                                    style={this.state.focusedTitle ? styles.focusedInput: styles.singleInput}>
                                </TextInput>
                            </View>
                            <View>
                                <TextInput
                                    placeholder={'Description'}
                                    value={this.state.description}
                                    onChangeText={(newText) => this.setState({description:newText})}
                                    onFocus= {() => this.setState({focusedDescription: true})}
                                    onBlur= {() => this.setState({focusedDescription:false})}
                                    editable = {true}
                                    keyboardAppearance={true}
                                    maxLength = {40}
                                    style={this.state.focusedDescription ? styles.focusedInput: styles.singleInput}>
                                </TextInput>
                            </View>
                            <TouchableOpacity style={{borderWidth:1, borderColor: Colors.profileBorder, borderRadius:10, height:40, marginTop:20, width:100, alignSelf:'center'}} onPress={() => {this.setMediaModalVisible(!this.state.mediaModalVisibe)}}>
                                <Text style={{alignSelf:'center', marginTop:10}}>{this.state.selected==''? 'Select image': 'Selected'}</Text>
                                {this.renderImageSelectedModal()} 
                            </TouchableOpacity>
                            <View style={{marginTop:40}}>
                                <TouchableOpacity disabled={this.isFormCompleted()? false: true} onPress= {() => this.saveNewNote()}>
                                    <Text style={this.isFormCompleted()? {color: Colors.alert, fontSize:20} : {color: Colors.inactive, fontSize:20}}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                </Modal>
         </View>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flex:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#CCD1D1',
    padding:10,
    flexDirection:'row',

},
focusedInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#85C1E9',
    height:60,
    width:300,
    margin:20,
},
singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#D5DBDB',
    height:50,
    width:250,
    margin:10,  
},

});
