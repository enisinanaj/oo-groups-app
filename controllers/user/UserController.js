import OAuthManager from 'react-native-oauth';
import APIConsts from '../../constants/APIConsts';
import User from '../../controllers/user/instance';

export const AUTH_PROVIDERS =  {
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
OAUTH_MANAGER.configure(AUTH_PROVIDERS);
const RNFS = require('react-native-fs');

var ig_access_token = "";

export var onGoogleLogin = () => {
    return OAUTH_MANAGER.deauthorize('google').then(() => {
        return OAUTH_MANAGER.authorize('google', {scopes: 'email+profile'})
            .then(() => getDataFromChannel(AUTH_PROVIDERS.google))
            .catch(err => console.log(err));
    })
}

export var onFacebookLogin = () => {
    return OAUTH_MANAGER.deauthorize('facebook')
    .then(() => authorizeFacebook())
    .catch(() => authorizeFacebook())
}

var authorizeFacebook = () => {
    return OAUTH_MANAGER.authorize('facebook', {scopes: 'email'})
        .then(() => getDataFromChannel(AUTH_PROVIDERS.facebook))
        .catch(err => console.error(err));
}

export var onInstagramLogin = (access_token) => {
    ig_access_token = access_token;
    return getDataFromChannel("instagram");
}

export var onTwitterLogin = () => {
    return OAUTH_MANAGER.deauthorize('twitter')
    .then(() => authorizeTwitter())
    .catch(() => authorizeTwitter()) 
}

var authorizeTwitter = () => {
    return OAUTH_MANAGER.authorize('twitter', {})
        .then(() => getDataFromChannel(AUTH_PROVIDERS.twitter))
        .catch(err => console.log(err));
}

var getDataFromChannel = (channel) => {
    if (channel == AUTH_PROVIDERS.facebook) {
        return OAUTH_MANAGER
            .makeRequest('facebook', '/me?fields=email,id,name,picture')
            .then(resp => {
                var user = {
                    username: resp.data.name,
                    indirizzo_email: resp.data.email,
                    foto_profilo: `https://graph.facebook.com/${resp.data.id}/picture?height=400&width=400`,
                    foto_profilo_ext: 'jpeg',
                    access_token: resp.data.id,
                    password: resp.data.id,
                    tipoAutenticazione: {
                        _id: '5be5cef31e7e268637ea41e4'
                    }
                }

                return user
            })
            .then(u => finalizeUserData(u))
            .catch(e => {
                console.error("attention error: ")
                console.error(e)
            });
    }

    if (channel == AUTH_PROVIDERS.twitter) {
        return OAUTH_MANAGER
            .makeRequest('twitter', 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true&skip_status=true&include_entities=false')
            .then(resp => {

                console.warn("Twitter display picture url: " + resp.data.profile_image_url_https);

                var user = {
                    username: resp.data.screen_name,
                    indirizzo_email: resp.data.email,
                    foto_profilo: resp.data.profile_image_url_https.replace("_normal", ""),
                    access_token: resp.data.id,
                    password: resp.data.id,
                    tipoAutenticazione: {
                        _id: '5be5cef31e7e268637ea41e4'
                    }
                }

                return user;
            })
            .then(u => finalizeUserData(u))
            .catch(e => console.error(e));
    }

    if (channel == AUTH_PROVIDERS.google) { 
        const googleUrl = 'https://www.googleapis.com/plus/v1/people/me';
        return OAUTH_MANAGER
            .makeRequest('google', googleUrl)
            .then(resp => {
                var user = {
                    username: resp.data.displayName,
                    indirizzo_email: resp.data.emails[0].value,
                    //foto_profilo: resp.data.image.url,
                    access_token: resp.data.id,
                    password: resp.data.id,
                    tipoAutenticazione: {
                        _id: '5be5cef31e7e268637ea41e4'
                    }
                }

                return user
            })
            .then(u => finalizeUserData(u))
            .catch(e => {console.warn(e)});
    }

    if (channel == "instagram") {
        return fetch("https://api.instagram.com/v1/users/self/?access_token=" + ig_access_token, {
            method: 'get'
        })
        .then((response) => response.json())
        .then((response) => {
            var user = {
                username: response.data.username,
                indirizzo_email: response.data.username + "@instagram",
                //foto_profilo: resp.data.image.url,
                access_token: response.data.id,
                password: response.data.id,
                tipoAutenticazione: {
                    _id: '5be5cef31e7e268637ea41e4'
                }
            }

            return user;
        })
        .then(u => finalizeUserData(u))
        .catch((error) => console.log(error))
    }
}

var registerNewUser = (user) => {
    const {foto_profilo} = user
    const fileExtension = user.foto_profilo_ext || foto_profilo.split(".").pop()
    user.foto_profilo = undefined
    user.foto_profilo_ext = undefined

    return fetch(APIConsts.apiEndpoint + "/utente", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then((result) => {
        return result.json();
    }).then((responseJSON) => {
        const localProfilePicture = RNFS.DocumentDirectoryPath + `/.user/${responseJSON.id}.${fileExtension}`

        // save user instance
        return RNFS.mkdir(RNFS.DocumentDirectoryPath + '/.user/').then(() => {
            const path = RNFS.DocumentDirectoryPath + '/.user/.profile';
            return RNFS.writeFile(path, user.id + '\n' + user.indirizzo_email, 'utf8')
        }).then(() => {
            let contentLength = 0;
            return RNFS.downloadFile({
                fromUrl: foto_profilo,
                toFile: localProfilePicture,
                begin: e => contentLength = e.contentLength
            }).promise
            .then(e => {
                while (e.bytesWritten < contentLength) {
                    // stop
                }
                postProfilePicture(user, responseJSON, localProfilePicture)
            })
            .catch(e => console.error(e))
        })
        .catch(e => {
            console.error(e)
        })
    }).catch(e => console.error(e))
}

var postProfilePicture = (user, responseJSON, localProfilePicture) => {
    const data = new FormData();

    console.warn("local picture file: " + localProfilePicture);
    
    data.append('refId', responseJSON.id);
    data.append('ref', 'utente');
    data.append('field', 'foto_profilo');
    data.append('files', {
        uri: localProfilePicture,
        type: 'image/jpeg', // or photo.type
        name: `${responseJSON.id}.jpg`
    });

    setTimeout(() => {
        return fetch(APIConsts.apiEndpoint + "/upload", {
            method: 'POST',
            body: data
        }).then(res => {
            console.warn(res)
            return user
        })
        .catch(e => console.error(e))
    }, 300)
}

var finalizeUserData = (user) => {
    fetch(APIConsts.apiEndpoint + "/utente?indirizzo_email=" + user.indirizzo_email)
    .then(result => result.json())
    .then(result => {
        if (result.length == 0) {
            console.warn("query results: " + result.length);

            return registerNewUser(user);
        } else {
            User.getInstance().user = result[0];
            User.getInstance().user.registered = true;
        }

        return result;
    }).catch(e => {
        console.warn(e)
    });
}