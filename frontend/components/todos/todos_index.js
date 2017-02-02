import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import TodosIndexItem from './todos_index_item.js';

class TodosIndex extends React.Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(TODOS ARRAY),
    };
  }

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
    photo: {
      height: 40,
      width: 40,
      borderRadius: 20,
    },
  });



  render () {
    <View>
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <TodosIndexItem {...data}/>}
    </View>
  }
}

export default TodosIndex;
