import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import GroupIndexItem from './group_index_item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
});

// <ListView
//   style={styles.container}
//   dataSource={this.state.dataSource}
//   renderRow={(data) => <GroupIndexItem {...data}>}>
// </ListView>
class GroupIndex extends React.Component {
  constructor(props) {
    super(props);

    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     dataSource: ds.cloneWithRows(GROUPS )
  //   };
  }

  render () {
    return (
      <View style={styles.container}>
        <Text> fgjgh</Text>
      </View>
    );
  }
}

module.exports = GroupIndex;