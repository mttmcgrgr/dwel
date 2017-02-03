import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import TodoDetail from './todo_detail';

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
  }
});

class TodosIndexItem extends React.Componenet {


  _onForward() {
    this.props.navigator.push({
      component: TodoDetail,
      title: 'Todo',
      passProps: {
        todo: this.props.todo,
      },
    });
  }

  render () {
    return (
      <View
          style={styles.container}
           onPress={this._onForward}>
        <Text style={styles.text}>
          {this.props.group.address}
        </Text>
        <Text style={styles.text}>
          `${this.props.group.todo_count} todos`
        </Text>
      </View>
    );
  }
}

export default TodosIndexItem;
