import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import GroupIndexItem from './group_index_item';


class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.groups)
    };
  }


  render () {
    console.log(this.props.currentUser);
    return (
      <View style={styles.indexPage}>
        <View style={styles.container}>
          <View style={styles.groupInfoContainer}>
            <Text style={styles.text}>
              {this.props.group.address}
            </Text>
            <Text style={styles.text}>
              {this.props.group.otherUser}
            </Text>
          </View>
          <View style={styles.addTodoButtonContainer}>
            <Image
              style={styles.addTodoButton}
              source={require('../../../images/plus.png')}/>
          </View>
        </View>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <GroupIndexItem navigator={this.props.navigator} group={data}/>}/>
      </View>
    );
  }
}


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


module.exports = GroupIndex;
