import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
// import TodoDetail from './todo_detail';

const styles = StyleSheet.create({
  container: {
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
  }
});

class TodosIndexItem extends React.Component {

  //
  // _onForward() {
  //   this.props.navigator.push({
  //     component: TodoDetail,
  //     title: 'Todo',
  //     passProps: {
  //       todo: this.props.todo,
  //     },
  //   });
  // }
  //
  // <TouchableOpacity
  //   onPress={this._onForward}>
  //   <Text style={styles.text}>
  //     {this.props.group.address}
  //   </Text>
  //   <Text style={styles.text}>
  //     {this.props.group.todos.length} outstanding todo(s)
  //   </Text>
  // </TouchableOpacity>


  render () {
    return (
      <View style={styles.container}>
        <Text>{this.props.todo.description}</Text>
      </View>
    );
  }
}

export default TodosIndexItem;
