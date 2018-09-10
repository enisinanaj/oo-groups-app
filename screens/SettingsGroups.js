import React, {Component} from 'react';
import { StyleSheet, Modal,Text, ScrollView, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CheckBox } from 'react-native-elements';



export default class SettingsGroups extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Settings',
        };
      };
    constructor(props) {
        super(props);
        this.state = {
            focusedName: false,
            focusedBio: false,
            modalVisible: false,
            num:0,
            selected:'',
            image:{uri: 'https://mahasiswigoblog.files.wordpress.com/2016/06/jj.jpg?w=282&h=283'},
            checkedPrivate: true,

        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    hideShowCheck(){
        this.setState({checkedPrivate: !this.state.checkedPrivate})
    }

    renderImageSelectedModal() {
        return (
            <Modal
                animationType="none"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <TouchableHighlight style={{height:50,backgroundColor:'black'}} onPress={() => {this.setState({modalVisible:false})}}>
                    <Text style={{color:'blue', backgroundColor:'white', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
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
    newImage(){
        this.setState({
            image:this.state.selected,
            modalVisible: false
        })
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
                <Text style={{color:'tomato', fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    } 
      
  render() {
    return (
        
        <ScrollView style={styles.container}>
            <TouchableOpacity style={{alignSelf:'flex-end', height:30, paddingRight:10}}>
                <Text style={{color: 'blue', fontSize:16}}>
                    Done
                </Text>
            </TouchableOpacity>
            <View style={{alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, paddingBottom:20}}>
                <Image
                    style={{width:80, height:80,borderRadius:40}}
                    source={this.state.image}
                    />
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                    <Text style={{color: 'blue', marginLeft: -5, marginTop:10}}>
                        Change avatar
                    </Text>
                    {this.renderImageSelectedModal()} 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.3}}>
                    Name
                </Text>
                <Text>Juventino</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop:10}}> 
                <Text style={{flex:0.3}}>Category </Text>
                <Text style={{fontWeight: 'bold'}}>Football </Text>
            </View>
            
    
            <View style={{flexDirection:'row', paddingTop:20, borderBottomWidth:1, borderBottomColor:'#D5D8DC', paddingBottom:15}}>

                <Text style={{fontSize:15, flex:0.6}}>Visibility</Text>

                <CheckBox
                    center
                    title='Public'
                    onIconPress={() => this.hideShowCheck()}
                    checked={!this.state.checkedPrivate}
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checkedColor={'#5499C7'}
                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                />

                <CheckBox
                    center
                    title='Private'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    containerStyle={{width:100, marginTop:-15, backgroundColor:'transparent', borderColor:'transparent'}}
                    onIconPress={() => this.hideShowCheck()}
                    checked={this.state.checkedPrivate}
                    checkedColor={'#5499C7'}
                />
            </View>
            <View style={{flexDirection:'column', paddingTop:10, borderBottomColor:'#EAECEE', borderBottomWidth:1, paddingBottom:20}}>
                <Text style={{alignSelf:'center', fontWeight:'bold'}}>
                    Admins
                </Text>
                <View style={{ flexDirection:'row', padding:5, backgroundColor:'white'}}>
                    <Text style={{margin:10}}> Mario Rossi</Text>
                    <TouchableOpacity>
                        <Text style={{color:'red', margin:10}}>
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row', padding:5, backgroundColor:'white'}}>
                    <Text style={{margin:10}}> Mario Rossi</Text>
                    <TouchableOpacity>
                        <Text style={{color:'red', margin:10}}>
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection:'row', padding:5, backgroundColor:'white'}}>
                    <Text style={{margin:10}}> Mario Rossi</Text>
                    <TouchableOpacity>
                        <Text style={{color:'red', margin:10}}>
                            Remove
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    );
  }
  
}




const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    padding:5,
    backgroundColor:'white',
    flex:1,

},
singleInput:{
    backgroundColor:'transparent',
    borderRadius:5,
    borderBottomWidth:1,
    borderColor:'#EBEDEF',
    height:25,
    padding:5,
    width:220,
    marginLeft:20,
},

});
