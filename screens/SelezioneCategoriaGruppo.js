import React from 'react';
import { KeyboardAvoidingView, Image, View, TouchableOpacity, Text, StyleSheet, TextInput, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Colors, { GlobalStyles } from '../constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import ImageResizer from 'react-native-image-resizer'
import ImagePicker from 'react-native-image-picker'
import APIConsts from '../constants/APIConsts';
import User from '../controllers/user/instance';

export default class SelezioneCategoriaGruppo extends React.Component {
    static navigationOptions = () => {
        return {
          headerTitle: 'Categoria gruppo',
          headerBackTitle: null
        //   headerRight: (
        //     <TouchableOpacity 
        //         disabled={params.disabled != undefined ? params.disabled : true}
        //         onPress={() => params.updateProfile()}
        //         style={{marginRight:10}}>
        //         <Text style={{fontSize: 18, color: params.disabled ? Colors.inactive : Colors.main}}>Salva</Text>
        //     </TouchableOpacity>
        //   )
        }
      }

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            originalCategories: [],
            selected: this.props.navigation.state.params.selected
        }
    }

    componentDidMount() {
        fetch(APIConsts.apiEndpoint + "/categoriegruppi", {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then(categories => this.setState({originalCategories: categories, categories, loading: false}))
    }

    setCategory(item) {
        this.props.navigation.state.params.setGroupCategory(item);
        this.props.navigation.goBack();
    }

    renderCategory({item}) {
        var selected = this.state.selected != undefined && item.id == this.state.selected.id;

        return (<TouchableOpacity style={styles.row} key={item.id} onPress={() => {this.setCategory(item)}}>
            <Text style={styles.label}>{item.categoria}</Text>
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
        let categories = originalCategories.filter(el => el.categoria.toLowerCase().startsWith(q.toLowerCase()))

        this.setState({categories})
    }

    render() {

        if (this.state.loading) {
            return (<View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <ActivityIndicator size={"large"} />
                </View>
            </View>)
        }

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