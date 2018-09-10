import React, {Component} from 'react';
import { StyleSheet, View, Image,} from 'react-native';


export default class IconAvatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,           
        }
    }
render(){
    return (
        <View style={{flexDirection:'row'}}>
            <Image
                style={styles.image}
                source={this.props.smallAvatar}
            />
            
        </View>
    )
}

}
const styles=StyleSheet.create ({
    image:{
        width:30,
        height:30,
        borderRadius:15,

    },
})