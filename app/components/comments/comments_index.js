import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.comments),
    };
  }



  render () {
    return (
      <View style={styles.listViewContainer}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <CommentIndexItem
            navigator={this.props.navigator} comment={data}/>}/>
      </View>
    );
  }
}

export default CommentsIndex;
