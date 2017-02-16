import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import GroupIndexItem from './group_index_item';

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    backgroundColor: '#fff',
    borderRadius:50,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20

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

          renderRow={(data) => <GroupIndexItem currentUser={this.props.currentUser} navigator={this.props.navigator} group={data}/>}/>

      </View>
    );
  }
}

module.exports = GroupIndex;
