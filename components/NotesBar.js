import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather'
import User from '../controllers/user/instance';


export default NotesBar = props => (<View style={styles.container}>
    <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center', padding: 10, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Feather name={"activity"} size={14} color={Colors.lighterText} />
            <Text style={{ fontSize: 11, marginLeft: 5, color: Colors.lighterText }}>NOTE</Text>
        </View>
    </TouchableOpacity>
    <ScrollView style={styles.notes} horizontal={true} bounces={true} 
                pagingEnabled={true} indicatorStyle={"black"} 
                showsHorizontalScrollIndicator={false}>
        <View style={styles.slide}>
            <View style={styles.slideInnerContainer}>
                <View style={{ flexDirection: 'column', padding: 10, height: 70, backgroundColor: 'transparent' }}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold' }}>T-shirt Juventus</Text>
                    </TouchableOpacity>
                    <Text>Buy this new T-shirt with juve logo just for 35 dollars.</Text>
                </View>
                <Image source={{ uri: 'https://ae01.alicdn.com/kf/HTB1TM7AQFXXXXcuXFXXq6xXFXXXh/2017-Juventus-fitness-T-Shirt-3d-printed-t-shirts-men-women-Long-sleeve-tumblr-t-Shirt.jpg_640x640.jpg' }} style={{ height: itemHeight, width: itemWidth, marginTop: 10 }} />
            </View>
        </View>

        <View style={styles.slide}>
            <View style={styles.slideInnerContainer}>
                <View style={{ flexDirection: 'column', padding: 10, height: 70, backgroundColor: 'transparent' }}>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold' }}>Accendino logo Juventus</Text>
                    </TouchableOpacity>
                    <Text>Buy this new lighter with juve logo just for 5 dollars.</Text>
                </View>
                <Image source={{ uri: 'https://www.musicolandia.it/2480-large_default/accendino-a-petrolio-tristar-mod-football---juventus-3-stars.jpg' }} style={{ height: itemHeight, width: itemWidth, marginTop: 10 }} />
            </View>
        </View>
    </ScrollView>
</View>)

const horizontalMargin = 10;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth - (horizontalMargin * 4);
const itemHeight = 200;

const styles = StyleSheet.create({
    container:{
        borderTopWidth:0,
        borderColor: '#f5f5f5',
        borderBottomWidth: 1,
        marginTop: 5
    },

    slide: {
        width: itemWidth,
        backgroundColor:'transparent',
        marginHorizontal: horizontalMargin
        // other styles for the item container
    },

    slideInnerContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        // other styles for the inner container
    },

    container: {
        flexDirection:'column',
        margin:5,
    },

    notes: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#f0f0f0',
        marginBottom: 10,
        paddingBottom: 15
    }
});
