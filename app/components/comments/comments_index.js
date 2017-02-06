import React from 'react';
import {View, Text, ListView, ScrollView, StyleSheet} from 'react-native';
import CommentIndexItem from './comments_index_item';

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
  comContainer: {
    // padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    margin: 3,
    backgroundColor: "white",
    borderWidth: 1,
		borderColor: 'gray'
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

    return (
      <View style={styles.listViewContainer}>
        <ScrollView>{this.props.comments.map( (comment) => {
            return (
              <View style={styles.comContainer}>
                <Text style={styles.text}>{comment.comment}</Text>
                <Text style={styles.text}>{comment.username}</Text>
              </View>
            );
          })}</ScrollView>

      </View>
    );
  }
}

export default CommentsIndex;
