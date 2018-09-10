import React, {Component} from 'react';
import { StyleSheet, Width,Text, height, View, Image, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {NavigationSingleton} from '../screens/login';
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
 
        if(this.state.infosVisible == true)
        {
          this.setState({infosVisible: false})
        }
        else
        {
          this.setState({infosVisible: true, rulesVisible: false})
        }
      }
      ShowHideRules = () =>{
 
        if(this.state.rulesVisible == true)
        {
          this.setState({rulesVisible: false})
        }
        else
        {
          this.setState({rulesVisible: true, infosVisible: false})
        }

      }


    renderInfos(){
        return(
            <View style={{padding:10}}>
                <Text>
                Web safe colors emerged during the early era of the internet; a standardized palette of 216 colors that displayed consistently across all major browsers.
                </Text>
            </View>
        )
    }

    renderRules(){
        return(
            <View style={{padding:10}}>
                <Text>
                Rules  safe colors emerged during the early era of the internet; a standardized palette of 216 colors that displayed consistently across all major browsers.
                </Text>
            </View>
        )
    }


  render() {
    return (
        <View style={{flexDirection:'column'}}>
            <View style={styles.container}>
        
                <TouchableOpacity onPress={this.ShowHideInfos} style={this.state.infosVisible? {flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#D4E6F1'}: {flexDirection:'row'}}>
                    <Entypo style={{marginRight:7}} name={'info'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>info</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.ShowHideRules} style={this.state.rulesVisible? {flexDirection:'row', borderBottomWidth:1, borderBottomColor:'#D4E6F1'}: {flexDirection:'row'}}>
                    <Feather style={{marginRight:7}} name={'list'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>rules</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => NavigationSingleton.instance.navigate("Gallery")} style={{flexDirection:'row'}}>
                    <Entypo style={{marginRight:7}} name={'picasa'} size={30} color={'black'}/>
                    <Text style={{fontSize:18, marginTop:5, marginRight:10}}>media</Text>
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
    borderTopWidth:1,
    borderColor:Colors.profileBorder,
    padding:10,
    justifyContent:'space-between',
},

});
