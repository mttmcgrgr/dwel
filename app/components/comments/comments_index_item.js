import React from 'react';
import {View, Text, TouchableOpacity,  StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    height: 50
  },
  commentItem: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 5
  },
  text: {
    // marginLeft: 12,
    fontSize: 14,
  }
});

class CommentsIndexItem extends React.Component {

  constructor (props) {
    super(props);

  }



  render () {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            {this.props.comment.username}
          </Text>
          <Text style={styles.text}>
            {this.props.comment.comment}
          </Text>
        </View>

      </View>
    );
  }
}

export default CommentsIndexItem;
