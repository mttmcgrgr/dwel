import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TodoDetail from './todo_detail';

const styles = StyleSheet.create({
  container: {
    height: 50
  },
  todoItem: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    width: 300,
    marginBottom: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
  }
});

class TodosIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      component: TodoDetail,
      title: 'Todo',
      passProps: {
        todo: this.props.todo
      }
    });
  }
  //

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onForward}
          style={styles.todoItem}>
          <Text style={styles.text}>
            {this.props.todo.description}
          </Text>
          <Text style={styles.text}>
            resolved: {this.props.todo.resolved}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TodosIndexItem;
