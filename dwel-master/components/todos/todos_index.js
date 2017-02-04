import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import TodosIndexItem from './todos_index_item.js';

const styles = StyleSheet.create({
  container: {
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

class TodosIndex extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.todos),
    };
  }



  render () {
    return (
      <View>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <TodosIndexItem
            navigator={this.props.navigator} todo={data}/>}/>
      </View>
    );
  }
}

export default TodosIndex;
