import React from 'react';
import {View, Text, Form, Picker, TouchableOpacity, ListView, TextInput, StyleSheet, Button } from 'react-native';
import GroupHome from './group_home';


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    height: 100,
    width: 300,
    marginBottom: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    marginBottom: 10
  }
});

class GroupIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this._onForward = this._onForward.bind(this);
  }

  _onForward () {
    this.props.navigator.push({
      component: GroupHome,
      title: 'Group',
      passProps: {
        group: this.props.group
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onForward}>
          <Text style={styles.text}>
            {this.props.group.address}
          </Text>
          <Text style={styles.text}>
            {this.props.group.todos.length} outstanding todo(s)
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}



export default GroupIndexItem;
