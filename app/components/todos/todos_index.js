import React from 'react';
import {View, Text, ListView, StyleSheet} from 'react-native';
import TodosIndexItem from './todos_index_item.js';

const styles = StyleSheet.create({
  listViewContainer: {
    flexDirection: 'column',

    justifyContent: 'flex-start'
  },
  container: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
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
      <View style={styles.listViewContainer}>
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
