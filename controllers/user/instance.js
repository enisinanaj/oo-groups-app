import APIConsts from "../../constants/APIConsts";

var userInstance;

export default class User {
    static getInstance() {
        if (userInstance == undefined) {
            userInstance = new User();
        }

        return userInstance;
    }

    setUser(user) {
        this.user = user;
        this.user.foto_profilo = APIConsts.apiEndpoint + this.user.foto_profilo.url
    }

    user = {};
}