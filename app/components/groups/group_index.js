import React from 'react';
import {View, Text, ListView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GroupIndexItem from './group_index_item';
import Keycode from '../session/Keycode';

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
  addTodoButton: {
    width: 20,
    height: 20,
    right: -35
  },
  addTodoButtonContainer: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.groups)
    };
    this._goToKeycode = this._goToKeycode.bind(this);
  }


  _goToKeycode() {
   this.props.navigator.push({
     component: Keycode,
     title: 'Add a Group',
     passProps: {
      currentUser: this.state.currentUser
      }
    });
  }


  render () {
    return (
      <View style={styles.indexPage}>
        <TouchableOpacity
        style={styles.addTodoButtonContainer}
        onPress={this._goToKeycode}>
          <Image
            style={styles.addTodoButton}
            source={require('../../../images/plus.png')}/>
        </TouchableOpacity>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}

          renderRow={(data) => <GroupIndexItem currentUser={this.props.currentUser} navigator={this.props.navigator} group={data}/>}/>

      </View>
    );
  }
}

module.exports = GroupIndex;
