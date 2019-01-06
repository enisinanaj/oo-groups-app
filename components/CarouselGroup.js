import React, {Component} from 'react';
import { StyleSheet, Width,Text, Dimensions,height, View, Image, TouchableOpacity} from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


export default class CarouselGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            entries : [
                {
                    slide:'https://ae01.alicdn.com/kf/HTB1TM7AQFXXXXcuXFXXq6xXFXXXh/2017-Juventus-fitness-T-Shirt-3d-printed-t-shirts-men-women-Long-sleeve-tumblr-t-Shirt.jpg_640x640.jpg',
                    title:"T-shirt Juventus",
                    description:'Buy this new T-shirt with juve logo just for 5 dollars.',
                },
                {   
                    slide:'https://images-na.ssl-images-amazon.com/images/I/71vYowUvGZL._SL1500_.jpg',
                    title:"Soccer ball logo Juventus",
                    description:'Buy this new shirt with juve logo just for 5 dollars.',
                },
                {   
                    slide:'https://www.musicolandia.it/2480-large_default/accendino-a-petrolio-tristar-mod-football---juventus-3-stars.jpg',
                    title:"Accendino logo Juventus",
                    description:'Buy this new lighter with juve logo just for 5 dollars.',
                },
            ]
        }
    }

    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <View style={styles.slideInnerContainer}>
                    <View style={{ flexDirection:'column' ,padding:10,height:70, backgroundColor:'transparent'}}>
                        <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                        </TouchableOpacity>
                        <Text>{item.description}</Text>
                    </View>
                    <Image
                        source={{ uri: item.slide }}
                        style={{ height: itemHeight, width: itemWidth, marginTop: 10 }}
                    />
                </View>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.container}>
                <Carousel
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                data={this.state.entries}
                inactiveSlideScale={0.6}
                layout={'default'}
                title={'My carousel'}
                />
            </View>    
        );
    }
  
}


const horizontalMargin = 10;
const slideWidth = 280;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        width: itemWidth,
        height: itemHeight,
        backgroundColor:'transparent',
        paddingHorizontal: horizontalMargin
        // other styles for the item container
    },

    slideInnerContainer: {
        width: slideWidth,
        flex: 1,
        backgroundColor:'transparent',
        // other styles for the inner container
    },

    container: {
        flexDirection:'column',
        margin:5,
    },

});
