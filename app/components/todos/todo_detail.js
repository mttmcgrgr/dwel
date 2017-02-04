import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  todoDetailContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    height: 60,
    width: 300,
    marginBottom: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  todoDetailPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60,
    padding: 10,
    backgroundColor: '#259ebc',
  }
});
class TodoDetail extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <View style={styles.todoDetailPage}>
        <View style={styles.todoDetailContainer}>
          <Text style={styles.text}>
            {this.props.todo.description}
          </Text>
          <Text style={styles.text}>
            resolved: {this.props.todo.resolved}
          </Text>
        </View>
      </View>
    );
  }
}

export default TodoDetail;
