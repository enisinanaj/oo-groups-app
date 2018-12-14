import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors, {Shadow} from '../constants/Colors';
import InstagramLogin from 'react-native-instagram-login'
import User from '../controllers/user/instance';
import {onGoogleLogin, onFacebookLogin, onTwitterLogin, onInstagramLogin, AUTH_PROVIDERS} from '../controllers/user/UserController';

const dimensions = Dimensions.get("window");

export class  NavigationSingleton {
    static instance;

    static getInstance() {
        return instance
    }
}

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

  goToTerms() {
      if (User.getInstance().user.registered && User.getInstance().user.tos_accettato) {
          this.props.navigation.navigate('UsernameSetUp');
      } else {
          this.props.navigation.navigate('Terms');
      }
  }

  componentDidMount() {
        NavigationSingleton.instance = this.props.navigation;
  }

  login(channel, token) {
    if (AUTH_PROVIDERS.google == channel) {
        onGoogleLogin().then(() => this.goToTerms())
    } else if (AUTH_PROVIDERS.facebook == channel) {
        onFacebookLogin().then(() => this.goToTerms())
    } else if (AUTH_PROVIDERS.twitter == channel) {
        onTwitterLogin().then(() => this.goToTerms())
    } else if (channel == "instagram") {
        onInstagramLogin(token).then(() => this.goToTerms())
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/login_bg.jpg')} style={{flex: 1, resizeMode: 'contain', width: dimensions.width}} resizeMethod={"resize"}>
          <View style={styles.backgroundOverlay}></View>
          <View style={[styles.container, {position: 'absolute', top: 0, backgroundColor: 'transparent'}]}>
            <View style={styles.logoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>twadle</Text>
                </View>
            </View>
            <View style={styles.socialContainer}>

                <TouchableOpacity onPress={() => this.login(AUTH_PROVIDERS.google)} style={Shadow.filterShadow}>
                    <View style={[styles.authenticationButton, styles.googleButton]}>
                        <FontAwesome name={'google'} size={30} color="white" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text style={styles.buttonText}>Accedi con </Text>
                            <Text style={styles.buttonTextStrong}>Google</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={{color: 'white', fontSize: 20, marginTop:5 ,alignSelf:'center' ,marginBottom:15, fontWeight: '800'}}>oppure</Text>

                <TouchableOpacity onPress={() => this.refs.instagramLogin.show()} style={Shadow.filterShadow}>
                    <View style={[styles.authenticationButton, styles.InstagramButton]}>
                        <Feather name={'instagram'} size={29} color="white" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text style={styles.buttonText}>Accedi con </Text>
                            <Text style={styles.buttonTextStrong}>Instagram</Text>
                        </View>
                    </View>
                    <InstagramLogin
                        ref='instagramLogin'
                        clientId='190818efb7914fadb62273aa42f868b0'
                        scopes={['public_content', 'follower_list']}
                        redirectUrl={"https://groupsapp.com"}
                        onLoginSuccess={(token) => this.login("instagram", token)}
                        onLoginFailure={(data) => console.error(data)}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.login(AUTH_PROVIDERS.facebook)} style={Shadow.filterShadow}>
                    <View style={[styles.authenticationButton, styles.facebookButton]}>
                        <EvilIcons name={'sc-facebook'} size={36} color="white" style={{marginTop: 1}} />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', left: -10}}>
                            <Text style={styles.buttonText}>Accedi con </Text>
                            <Text style={styles.buttonTextStrong}>Facebook</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.login(AUTH_PROVIDERS.twitter)} style={Shadow.filterShadow}>
                    <View style={[styles.authenticationButton, styles.twitterButton]}>
                        <Entypo name={'twitter'} style={{marginTop: 2}} size={26} color="white" />
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <Text style={styles.buttonText}>Accedi con </Text>
                            <Text style={styles.buttonTextStrong}>Twitter</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-30,
  },
 
logoContainer:{
    flexDirection: 'column', 
    marginTop: 50,
    alignSelf: 'center', 
},

logo: {
    backgroundColor: Colors.main,
    height:160,
    width:160,
    paddingTop: 15,
    alignItems: "center",
    flexDirection: 'column',
    justifyContent: "center",
    borderRadius:80,
},

titleContainer:{
    marginTop:70,
    marginLeft:27,
},

title: {
    fontSize: 35,
    fontWeight: '800',
    color: 'white',
},

socialContainer:{
    flexDirection:'column',
    marginTop:150,
},

authenticationButton:{
    flexDirection:'row',
    padding: 10,
    borderRadius: 25,
    paddingLeft: 15,
    flexDirection:'row',
    marginBottom: 10,
    marginLeft: 20,
    height: 50,
    marginRight: 20,
    width: Dimensions.get('window').width - 40
},

backgroundOverlay: {
    backgroundColor: "rgba(0,0,0, .5)",
    position: 'absolute',
    top: 0,
    flex: 1
},

buttonText:{
    color:'white',
    fontSize:17,
    marginTop: 5,
    paddingLeft: 15
},

buttonTextStrong:{
    color:'white',
    fontSize:17,
    fontWeight: 'bold',
    marginTop: 5,
},

googleButton:{
    backgroundColor:'#F92E28',
},

InstagramButton:{
    backgroundColor:'#E68722',
},

facebookButton:{
    backgroundColor:'#13329E',
},

twitterButton:{
    backgroundColor:'#43BBF7'
}
 
});
