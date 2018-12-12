var userInstance;

export default class User {
    static getInstance() {
        if (userInstance == undefined) {
            userInstance = new User();
        }

        return userInstance;
    }

    user = {};
}