import React from 'react';
import {View, Text, ListView, ScrollView, StyleSheet} from 'react-native';
import CommentIndexItem from './comments_index_item';

const styles = StyleSheet.create({
  listViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  container: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',


  },
  comContainer: {
    // padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 3,
    backgroundColor: "#fc620a",
    borderWidth: 1,
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
		borderColor: 'white',
    left: -30,
    width: 250
  },
  comContainerRight: {
    // padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 3,
    backgroundColor: "#fc620a",
    borderWidth: 1,
    padding: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderColor: 'white',
    left: -30,
    width: 250
  },
  text: {
    marginLeft: 20,
    fontSize: 14,
    color: 'white'
  }
});
// 8cbdfe

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
                <Text style={styles.text}>-</Text>
                <Text style={styles.text}>{comment.username}</Text>
              </View>
            );
          })}</ScrollView>

      </View>
    );
  }
}

export default CommentsIndex;
