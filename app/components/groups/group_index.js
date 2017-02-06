import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
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


  render () {
    return (
      <View style={styles.indexPage}>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(group) => <GroupIndexItem navigator={this.props.navigator} group={group}/>}/>
      </View>
    );
  }
}

module.exports = GroupIndex;
