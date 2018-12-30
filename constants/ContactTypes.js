export default class ContactTypes {
    static INSTAGRAM = '5c2769e3130af502c31b7bd8';
    static FACEBOOK = '5c2769d8130af502c31b7bd6';
    static EMAIL = '5c2769e8130af502c31b7bd9';
    static TWITTER = '5c2769dd130af502c31b7bd7';

    static getNameForKey = (key) => {
        switch (key) {
            case ContactTypes.INSTAGRAM:
                return "instagramUsername";
            case ContactTypes.FACEBOOK:
                return "facebookUsername";
            case ContactTypes.TWITTER:
                return "twitterUsername";
            case ContactTypes.EMAIL: 
            default:
                return "email";
        }

    }

    static getFullContactUrlForContact = (contact) => {
        switch (contact.tipocontatti) {
            case ContactTypes.FACEBOOK:
             return `https://facebook.com/${contact.url}`
            case ContactTypes.INSTAGRAM:
             return `https://instagram.com/${contact.url}`
            case ContactTypes.TWITTER:
             return `https://twitter.com/${contact.url}`
            case ContactTypes.EMAIL:
            default:
             return `mailto:${contact.url}`
        }
    }

    static getKeyFromName = (name) => {
        switch(name) {
            case 'facebookUsername':
            return ContactTypes.FACEBOOK;

            case 'twitterUsername':
            return ContactTypes.TWITTER;

            case 'instagramUsername':
            return ContactTypes.INSTAGRAM;

            case 'email':
            default:
            return ContactTypes.EMAIL;
        }
    }
}