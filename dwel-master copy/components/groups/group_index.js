import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import GroupIndexItem from './group_index_item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  indexPage: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
    backgroundColor: '#259ebc',

  },

});

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.groups)
    };
  }

  // <ListView
  //   style={styles.container}
  //   dataSource={this.state.dataSource}
  //   renderRow={(data) => <GroupIndexItem {...data}/>}/>

  render () {
    return (
      <View style={styles.indexPage}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <GroupIndexItem group={data}/>}/>
      </View>
    );
  }
}

module.exports = GroupIndex;
