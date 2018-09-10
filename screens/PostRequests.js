import React from 'react';
import { StyleSheet, ScrollView, ListView} from 'react-native';
import PostRequestCard from '../components/PostRequestCard';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PostRequests extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Post requests',
        };
      };
        
    constructor(props) {
        super(props);

        var allPosts = [{
            id: 1,
            description: 'Best moments from this season!',
            smallAvatar: require('../images/profilepicture.jpeg'),
            postImage: require('../images/soccercup.jpeg'),
            author: 'Mario Rossi',
            category: 'ChampionsLeague'
        }, {
            id: 2,
            description: 'What colors are in for this season? Famous bloggers say...',
            smallAvatar: require('../images/profilepicturegirl.jpeg'),
            postImage: require('../images/fashion.jpeg'),
            author: 'Jane Smith',
            category: 'Fashion'
        }];

        this.state = {
            originalPosts: allPosts,
            posts: ds.cloneWithRows(allPosts)
        }
    }

    renderPost(item) {
        return (
            <PostRequestCard
                key={item.id}
                elementId={item.id}
                description={item.description}
                smallAvatar={item.smallAvatar} 
                postImage={item.postImage} 
                author={item.author}
                category={item.category}
                onRemoveFromParentState={this.removeFromState.bind(this)}/>)
    }

    removeFromState(idToRemove) {
        var posts = this.state.originalPosts;
        var newState = [];

        posts.map((element) => {
            if (element.id != idToRemove) {
                newState.push(element);
            }
        })

        this.setState({
            originalPosts: newState,
            posts: ds.cloneWithRows(newState)
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <ListView
                    dataSource={this.state.posts}
                    renderRow={(item) => this.renderPost(item)} />
            </ScrollView>
        );
    } 
}

const styles = StyleSheet.create({
 
container:{
    flexDirection:'column',
    flex:1,
},

});
