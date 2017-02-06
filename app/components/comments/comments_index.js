import React from 'react';
import {View, Text, ListView, ScrollView, StyleSheet} from 'react-native';
import CommentIndexItem from './comments_index_item.js';

const styles = StyleSheet.create({
  listViewContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

class CommentsIndex extends React.Component {
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(this.props.comments),
    // };
    // console.log(this.state);
  }

  componentDidMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      dataSource: ds.cloneWithRows(this.props.comments)
     })
  }



  render () {
    console.log(this.state);
    return (
      <View style={styles.listViewContainer}>
        <ScrollView>{this.props.comments.map( (comment) => <Text>{comment.comment}</Text>)}</ScrollView>

      </View>
    );
  }
}

export default CommentsIndex;
