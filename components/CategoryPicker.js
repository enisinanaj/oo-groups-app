import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing} from 'react-native';
import CategorySingleOption from './CategorySingleOption';
import Colors from '../constants/Colors';



export default class CategoryPicker extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title: this.props.title,
            OptionsVisible: false,
            categoriesViewHeight: new Animated.Value(0),
            categories: [
                {nome: 'Calcio'},
                {nome: 'Fantacalcio'},
                {nome: 'Mercato'}],
            selectedCategory: ''
        }
    }

    setOptionsVisible(visible) {
        //   this.setState({OptionsVisible: visible})
        if (this.state.OptionsVisible) {
            this.setState({OptionsVisible: false})
            
            Animated.timing(this.state.categoriesViewHeight, {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }).start()
        } else {
            this.setState({OptionsVisible: true})
            
            Animated.timing(this.state.categoriesViewHeight, {
                toValue: 100,
                duration: 500,
                easing: Easing.bounce
            }).start()
        }
        
    }

    renderAllOptions() {
        return this.state.categories.map( (el, i) =>  {
            return <CategorySingleOption key={i} category={el.nome} 
                onPress={() => {
                    this.setState({selectedCategory: el});
                    this.setOptionsVisible(false);
                }}/>
        })
    }

    renderCategoryOptions(){
      return(
        <Animated.View style={{padding:10, flexDirection:'column', height: this.state.categoriesViewHeight}}>
            { this.renderAllOptions() }
        </Animated.View>
      )
    }

    render() {
        return (
          <View>
            <TouchableOpacity onPress={() => {this.setOptionsVisible(!this.state.OptionsVisible)}} style={styles.simpleButton}>
              <Text style={[{fontSize:18}, this.state.selectedCategory != '' ? {fontWeight: 'bold'} : {}]}>
                {this.state.selectedCategory != '' ? this.state.selectedCategory.nome : 'Seleziona una categoria'}
              </Text>
            </TouchableOpacity>
            {this.renderCategoryOptions()}
          </View>
          
        );
    }
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize:15,
    },
    simpleButton:{
      backgroundColor:'transparent',
      flexDirection:'column',
      alignItems:'center',
      alignSelf:'center',
      width:250,
      height:40,
      borderColor:Colors.profileBorder,
      borderWidth:1,
      borderRadius:5,
      justifyContent:'center',
      
  },
});
