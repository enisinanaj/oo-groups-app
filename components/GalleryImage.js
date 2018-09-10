import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';


export default class GalleryImage extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={{width:120, height:120, margin:1}}
                    source={this.props.image}
                />
            </TouchableOpacity>
        </View>
    );
  }
  
}




const styles = StyleSheet.create({


});
