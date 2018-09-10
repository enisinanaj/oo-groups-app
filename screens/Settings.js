import React, {Component} from 'react';
import { StyleSheet, Modal,Text, TextInput, View, Image, TouchableHighlight,TouchableOpacity} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';


export default class Settings extends React.Component {
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
            //image:{uri:('../images/fashion.jpeg')},
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
                <TouchableHighlight style={{height:50,backgroundColor:'white'}} onPress={() => {this.setState({modalVisible:false})}}>
                    <Text style={{color:Colors.main, backgroundColor:'white', fontSize:20, marginLeft:20, marginTop:20, marginBottom:10}}> Cancel </Text>
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
                <Text style={{color:Colors.save, fontSize:18, marginLeft:30, marginTop:10}}>Save selected image </Text>
            </TouchableOpacity>
        )
    } 
      
  render() {
    return (
        
        <View style={styles.container}>
            <TouchableOpacity style={{alignSelf:'flex-end', height:30, paddingRight:10}}>
                <Text style={{color: Colors.main, fontSize:16}}>
                    Done
                </Text>
            </TouchableOpacity>
            <View style={{alignItems:'center', borderBottomColor:'#EAECEE', borderBottomWidth:1, paddingBottom:20}}>
                <Image
                    style={{width:80, height:80,borderRadius:40}}
                    source={require('../images/user.jpg')} 
                    />
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                    <Text style={{color: Colors.main, marginLeft: -5, marginTop:10}}>
                        Change avatar
                    </Text>
                    {this.renderImageSelectedModal()} 
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Username
                </Text>
                <TextInput
                    value={'Leandro90'}
                    maxLength = {60}
                    keyboardAppearance={true}
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Password
                </Text>
                <TextInput
                    value={'*********'}
                    maxLength = {60}
                    keyboardAppearance={true}
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Bio
                </Text>
                <TextInput
                    value={'I love this app!'}
                    maxLength = {60}
                    keyboardAppearance={true}
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    E-mail
                </Text>
                <TextInput
                    value={'leandro90@example.com'}
                    maxLength = {60}
                    keyboardAppearance={true}
                    onFocus= {() => this.setState({focusedName: true})}
                    onBlur= {() => this.setState({focusedName:false})}
                    placeholder={this.value}
                    style={styles.singleInput}
                    clearButtonMode={'while-editing'}
                />
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
                    checkedColor={Colors.main}
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
                    checkedColor={Colors.main}
                />
            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Facebook
                </Text>
                <Text>
                    facebook.com/leandro90
                </Text>

            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Instagram
                </Text>
                <Text>
                    Instagram.com/leandro90
                </Text>

            </View>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <Text style={{flex:0.6}}>
                    Twitter
                </Text>
                <TouchableOpacity>
                    <Text style={{color:Colors.main}}>
                        link accounts
                    </Text>
                </TouchableOpacity>
                

            </View>

        </View>
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
    borderColor:'#99A3A4',
    height:25,
    padding:5,
    width:220,
    marginLeft:20,
},

});
