import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';

export default class SelezioneCategoriaGruppo extends React.Component {
    static navigationOptions = ({navigation}) => {
        let {params} = navigation.state;

        return {
          headerTitle: 'Sotto categorie',
          headerBackTitle: null,
          headerRight: (
                <TouchableOpacity 
                    onPress={() => {params.onDone != undefined ? params.onDone() : {}}}
                    style={{marginRight:10}}>
                    <Text style={{fontSize: 18, color: Colors.main}}>Salva</Text>
                </TouchableOpacity>
            )
        }
      }

    constructor(props) {
        super(props)

        let defaultSubCategory = {
            name: 'Altre',
            removable: false,
            default: true
        };

        let selected = this.props.navigation.state.params.selected != undefined
            && this.props.navigation.state.params.selected.length > 0 ? this.props.navigation.state.params.selected : [defaultSubCategory]

        this.state = {
            selected,
            newSubCategory: ''
        }
    }

    componentDidMount() {
        this.props.navigation.state.params.onDone = () => {
            this.onDone()
        }
    }

    onDone() {
        this.props.navigation.state.params.setGroupSubCategories(this.state.selected);
        this.props.navigation.goBack();
    }

    renderSubCategories() {
        return this.state.selected.map((el, index) => {
            return this.renderCategory(el, index)
        })
    }

    renderCategory(item, index) {
        return (<View style={styles.subCategory} key={index}>
            <Text style={styles.label}>{item.name}</Text>
            { item.removable != undefined && item.removable ?
                <TouchableOpacity onPress={() => {this.removeSubCategory(item)}}>
                    <Feather name={"x"} size={20} color={Colors.lighterText}/>
                </TouchableOpacity>
            : null}
        </View>)
    }

    removeSubCategory(item) {
        let {selected = []} = this.state;
        selected = selected.filter(el => el.name != item.name)

        this.setState({selected})
    }

    addSubCategory() {
        if (this.state.newSubCategory == undefined || this.state.newSubCategory == '') {
            return;
        }
        
        let {selected = []} = this.state;
        if (selected.find(el => el.name == this.state.newSubCategory) != undefined) {
            return;
        }

        selected.push({
            name: this.state.newSubCategory,
            removable: true
        })

        this.setState({selected, newSubCategory: ''})
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.filterRow}>
                    <TextInput style={styles.searchBox}
                        autoCapitalize={"none"}
                        value={this.state.newSubCategory}
                        placeholder={"Nuova sotto categoria"}
                        onChangeText={(newSubCategory) => this.setState({newSubCategory})}>
                    </TextInput>
                    <TouchableOpacity style={[styles.searchIcon, {flexDirection: 'row', justifyContent: 'flex-start'}]}
                        onPress={() => {this.addSubCategory()}}>
                        <Feather name={"plus"}  size={16} color={Colors.main} style={{marginRight: 3, marginTop: 4.8}}/>
                        <Text style={{color: Colors.main, marginTop: 5.5, fontSize: 11}}> Aggiungi</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start', margin: 10, flexWrap: 'wrap'}}>
                    {this.renderSubCategories()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    subCategory: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#F5F5F5',
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        borderBottomWidth: 0.5,
        margin: 5
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
        paddingRight: 80,
        backgroundColor: '#f5f5f5',
        color: Colors.darkTitle
    },

    searchIcon: {
        position: 'absolute',
        right: 30,
        top: 15
    }
})