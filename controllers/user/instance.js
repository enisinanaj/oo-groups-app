import APIConsts from "../../constants/APIConsts";

var userInstance;

export default class User {
    user = {}

    static getInstance() {
        if (userInstance == undefined) {
            userInstance = new User();
        }

        return userInstance;
    }

    setUser(user) {
        this.user = user;

        if (this.user.foto_profilo != null && typeof this.user.foto_profilo == 'object') {
            this.user.foto_profilo = APIConsts.apiEndpoint + this.user.foto_profilo.url
        }

        if (this.user.foto_copertina != null && typeof this.user.foto_copertina == 'object') {
            this.user.foto_copertina = APIConsts.apiEndpoint + this.user.foto_copertina.url
        } else if (this.user.foto_copertina == null) {
            this.user.foto_copertina = 'https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
        }
    }
}