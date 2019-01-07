import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import MenuBarMember from '../components/MenuBarMember';
import GroupProfileHeader from '../components/GroupProfileHeader';
import NotesBar from '../components/NotesBar';
import CategoryDatas from '../components/CategoryDatas';
import ShareButton from '../components/ShareButton';
import Colors from '../constants/Colors';
import MyGroupsBar from '../components/MyGroupsBar'

export default Profile = (props) => {
    let {group} = props.navigation.state.params;

    return (
        <ScrollView style={styles.container}>
            <GroupProfileHeader group={group} />

            <MenuBarMember style={{marginTop: 10}} group={group} navigation={props.navigation} />
            {/* <NotesBar /> re-enable when notes will be available in the backend */}
            <ShareButton group={group}/>
            <MyGroupsBar style={{marginTop: 25}} titleStyle={{marginBottom: 10}} title={"CATEGORIE"} rightViewVisible={false}>
                { group.categorie.map(el => {
                    return <CategoryDatas key={el.id} onPress={() => props.navigation.navigate("Posts")} 
                        categoryTitle={el.descrizione_categoria} yourVote={0} generalRating={'0'}/>
                })}
            </MyGroupsBar>
            <View style={{height: 40, flexDirection: 'row', justifyContent: 'center'}}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor: 'white'
    },

    sectionHeader: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 10,
        color: Colors.darkTitle,
        fontWeight: '500',
        marginHorizontal: 20
    },
});
