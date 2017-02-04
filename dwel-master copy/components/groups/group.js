import React from 'react';
import {View, Text, Form, Image, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import TodosIndex from '../todos/todos_index';
import TodoForm from '../todos/todos_form'

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


class Group extends React.Component {
  constructor(props) {
    super(props);
    this.groupMember = this.groupMember.bind(this);
    this._onForward = this._onForward.bind(this);
  }


  groupMember () {
    if (current_user.id === this.props.group.user1_id) {
      return this.props.group.user2.username;
    } else {
      return this.props.group.user1.username;
    }
  }

  _onForward() {
    this.props.navigator.push({
      component: TodoForm,
      title: 'Todo Form',
      passProps: {
        groupId: this.props.group.id
      },
  });
}
  render () {
    <View>
      <View>
        <View>
          <Text> Address </Text>
          <Text> {this.groupMember()} </Text>
          <Text> Address </Text>
        </View>
        <View>
          <Image
            style={styles.addTodoButton}
            source={require('../../images/plus.png')}
            onPress = {this._onForward}/>
        </View>
      </View>
      <TodosIndex todos={this.props.group.todos}/>
    </View>;
  }
}

export default Group;
