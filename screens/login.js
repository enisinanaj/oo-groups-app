import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, View, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors, {Shadow} from '../constants/Colors';
import OAuthManager from 'react-native-oauth';
import InstagramLogin from 'react-native-instagram-login'

const config =  {
    twitter: {
        consumer_key: '82Ogvm3HlDltQpeRC9N965uoo',
        consumer_secret: 'RECXW5t7n7ie95Ra0LCONSBwInyPZgPrF8EUgnD6YvuOPJaAtV'
    },
    facebook: {
        client_id: '1938887526158896',
        client_secret: '500a47a33913ae14be28350e1168798c'
    },
    google: {
        callback_url: 'com.googleusercontent.apps.795771527499-2r9lcn8mr7tsdvrkl70kc052q6k8crn8:/google',
        client_id: '795771527499-2r9lcn8mr7tsdvrkl70kc052q6k8crn8.apps.googleusercontent.com'
    }
}

const OAUTH_MANAGER = new OAuthManager('groupsapp')
OAUTH_MANAGER.configure(config);

export class  NavigationSingleton {
    static instance;

    static getInstance() {
        return instance
    }
}


export default class Login extends Component {
    static navigationOptions = {
        header: 
          null
    };

    constructor(props) {
        super(props);
    }

    doLogin(token, type) {
        fetch("")
    }

    onGoogleLogin() {
        //OAUTH_MANAGER.deauthorize('google');
        OAUTH_MANAGER.authorize('google', {scopes: 'email+profile'})
            .then(resp => console.log(resp))
            .then(() => this.props.navigation.navigate('Terms'))
            .catch(err => console.log(err));
    }

    onFacebookLogin() {
        //OAUTH_MANAGER.deauthorize('facebook');
        OAUTH_MANAGER.authorize('facebook', {}) //{scopes: 'email,profile'}
            .then(resp => console.log(resp))
            .then(() => this.props.navigation.navigate('Terms'))
            .catch(err => console.log(err));
    }

    onTwitterLogin() {
        //OAUTH_MANAGER.deauthorize('twitter');
        OAUTH_MANAGER.authorize('twitter', {}) //{scopes: 'email,profile'}
            .then(resp => console.log(resp))
            .then(() => this.props.navigation.navigate('Terms'))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        NavigationSingleton.instance = this.props.navigation;
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <View style={styles.logo}>
                <FontAwesome  style={{position:'absolute'}} name={'group'} size={90} color={'white'}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Groups</Text>
            </View>
        </View>
        <View style={styles.socialContainer}>

            <TouchableOpacity onPress={() => this.onGoogleLogin()} style={Shadow.filterShadow}>
                <View style={[styles.authenticationButton, styles.googleButton]}>
                    <FontAwesome name={'google'} size={30} color="white" />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                        <Text style={styles.buttonText}>Accedi con </Text>
                        <Text style={styles.buttonTextStrong}>Google</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <Text style={{color: Colors.main, fontSize: 20, marginTop:5 ,alignSelf:'center' ,marginBottom:15}}>oppure</Text>

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
                    onLoginSuccess={(token) => console.error(token)}
                    onLoginFailure={(data) => console.error(data)}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onFacebookLogin()} style={Shadow.filterShadow}>
                <View style={[styles.authenticationButton, styles.facebookButton]}>
                    <EvilIcons name={'sc-facebook'} size={36} color="white" style={{marginTop: 1}} />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', position: 'relative', left: -10}}>
                        <Text style={styles.buttonText}>Accedi con </Text>
                        <Text style={styles.buttonTextStrong}>Facebook</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onTwitterLogin()} style={Shadow.filterShadow}>
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
    marginTop:25,
    marginLeft:27,
},

title: {
    fontSize: 35,
    color: Colors.main,
},

socialContainer:{
    flexDirection:'column',
    marginTop:50,
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
