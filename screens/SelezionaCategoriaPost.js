import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ActivityIndicator, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import APIConsts from '../constants/APIConsts';

export default class SelezioneCategoriaPost extends React.Component {
    static navigationOptions = () => {
        return {
          headerTitle: 'Categoria post',
          headerBackTitle: null
        }
      }

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            originalCategories: this.props.navigation.state.params.categories,
            selected: this.props.navigation.state.params.selected,
            categories: this.props.navigation.state.params.categories
        }
    }

    setCategory(item) {
        this.props.navigation.state.params.setPostCategory(item);
        this.props.navigation.goBack();
    }

    renderCategory({item}) {
        var selected = this.state.selected != undefined && item.id == this.state.selected.id;

        return (<TouchableOpacity style={styles.row} key={item.id} onPress={() => {this.setCategory(item)}}>
            <Text style={styles.label}>{item.descrizione_categoria}</Text>
            { selected ?
                <Feather name={"check"} size={20} color={Colors.lighterText}/>
            : null}
        </TouchableOpacity>)
    }

    filterCategories(q) {
        if (q == '' || q == null || q == undefined) {
            this.setState({categories: this.state.originalCategories})
        }

        let {originalCategories = []} = this.state;
        let categories = originalCategories.filter(el => el.descrizione_categoria.toLowerCase().startsWith(q.toLowerCase()))

        this.setState({categories})
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.filterRow}>
                    <TextInput style={styles.searchBox}
                        autoCapitalize={"none"}
                        placeholder={"Filtra"}
                        onChangeText={(q) => this.filterCategories(q)}>
                    </TextInput>
                    <Feather name={"search"} style={styles.searchIcon} size={20} color={Colors.darkTitle} />
                </View>
                <FlatList
                    data={this.state.categories}
                    renderItem={el => this.renderCategory(el)} 
                    keyExtractor={(item) => item.id}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    row: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'space-between',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.5
    },

    label: {
        fontSize: 16,
        color: Colors.darkGrey,
    },

    filterRow: {
        flexDirection:'row',
        paddingHorizontal: 20,
        paddingVertical: 8,
        justifyContent: 'flex-start',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 0.5
    },

    searchBox: {
        flex: 1,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        paddingRight: 35,
        backgroundColor: '#f5f5f5',
        color: Colors.darkTitle
    },

    searchIcon: {
        position: 'absolute',
        right: 30,
        top: 15
    }
})