import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';


export default class MenuBarMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            infosVisible: false,    
            rulesVisible: false,    
        }
    }

    ShowHideInfos = () =>{
        if(this.state.infosVisible == true) {
            this.setState({infosVisible: false})
        } else {
            this.setState({infosVisible: true, rulesVisible: false})
        }
    }

    ShowHideRules = () =>{
        if(this.state.rulesVisible == true) {
            this.setState({rulesVisible: false})
        } else {
            this.setState({rulesVisible: true, infosVisible: false})
        }
    }

    renderInfos(){
        if (this.props.group.info == undefined || this.props.group.info == null || this.props.group.info == '') {
            return null;
        }

        return(
            <View style={{padding:10}}>
                <Text>
                    {this.props.group.info.testo}
                </Text>
            </View>
        )
    }

    renderRules(){
        if (this.props.group.regole == undefined || this.props.group.regole == null || this.props.group.regole == '') {
            return
        }

        return(
            <View style={{padding:10}}>
                <Text>
                    {this.props.group.regole.testo}
                </Text>
            </View>
        )
    }


  render() {
    return (
        <View style={[{flexDirection:'column'}, this.props.style]}>
            <View style={styles.container}>
        
                {this.props.group.info != undefined ? 
                    <TouchableOpacity onPress={this.ShowHideInfos} style={this.state.infosVisible? {flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#D4E6F1'}: styles.menuStyle}>
                        <Feather style={{marginRight:3}} name={'info'} size={16} color={Colors.lighterText}/>
                        <Text style={{fontSize:13, color: Colors.lighterText}}>INFO</Text>
                    </TouchableOpacity>
                : null }

                {this.props.group.regole != undefined ? 
                    <TouchableOpacity onPress={this.ShowHideRules} style={this.state.rulesVisible? {flexDirection:'row', borderBottomWidth:1, borderBottomColor: '#D4E6F1'}: styles.menuStyle}>
                        <Feather style={{marginRight:3}} name={'flag'} size={16} color={Colors.lighterText}/>
                        <Text style={{fontSize: 13, color: Colors.lighterText}}>REGOLE</Text>
                    </TouchableOpacity>
                : null }

                <TouchableOpacity onPress={() => this.props.navigation.navigate("Gallery", this.props.group)} style={styles.menuStyle}>
                    <Feather style={{marginRight:3}} name={'image'} size={16} color={Colors.lighterText}/>
                    <Text style={{fontSize:13, color: Colors.lighterText}}>MEDIA</Text>
                </TouchableOpacity>

            </View>
            {this.state.infosVisible? this.renderInfos() : null}
            {this.state.rulesVisible? this.renderRules() : null}
        </View>
    );
  }
  
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor: Colors.lightBorder,
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        justifyContent:'space-between',
    },

    menuStyle: {
        backgroundColor: '#fafafa',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRightWidth: 1,
        borderRightColor: Colors.lightBorder
    }
});
