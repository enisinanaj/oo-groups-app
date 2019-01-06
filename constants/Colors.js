import {StyleSheet} from 'react-native'

const Colors = {
    main: '#002bff',
    inactive:'#808B96',
    save:'#D35400',
    lightBorder:'#E5E5E5',
    backgroundColor:'#F9F9F9',
    alert:'#EC7063',
    profileBorder:'#CCD1D1',
    darkBorder: '#AAA',
    darkGrey: '#4a4a4a',
    darkTitle: '#4e4e4e',
    accent1: '#FF671B',
    lightGreyBackground: '#F5F5F5',
    lighterText: '#8b8b8b',
    white: '#FFFFFF'
}

export default Colors;

export const Shadow = {
    filterShadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 2
    },
    cardShadow: {
        shadowColor: "#000000",
        shadowOpacity: 0.23,
        shadowRadius: 3,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 4
    },

}

export const GlobalStyles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: Colors.accent1,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30
    }
});