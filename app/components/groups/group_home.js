import React from 'react';
import {View, Text, Image, Picker, TextInput, ListView, StyleSheet} from 'react-native';
import TodosIndex from '../todos/todos_index';
import TodosIndexItem from '../todos/todos_index_item.js';
// import TodoForm from '../todos/todos_form';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  groupInfoContainer: {
    width: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  text: {
    width: 300,
    marginLeft: 12,
    fontSize: 16,
  },
  indexPage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: '#259ebc',
  },
  addTodoButton: {
    width: 20,
    height: 20
  },
  addTodoButtonContainer: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listViewContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listContainer: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  descriptionInput: {
    height: 20,
    width: 300
  },
  bodyInput: {
    height: 20,
    width: 300
  }
});


class GroupHome extends React.Component {
  constructor(props) {
    super(props);
    // this._onForward = this._onForward.bind(this);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const todos = this.props.todos;
    this.state = {
      // dataSource: ds.cloneWithRows(this.props.todos),
      description: "",
      category: "",
      body: ""
    }
  }



//   _onForward() {
//     this.props.navigator.push({
//       component: TodoForm,
//       title: 'Todo Form',
//       passProps: {
//         groupId: this.props.group.id
//       },
//   });
// }


            // onPress = {this._onForward}

  render () {
    return (
      <View style={styles.indexPage}>
        <View style={styles.container}>
          <View style={styles.groupInfoContainer}>
            <Text style={styles.text}> {this.props.group.address}</Text>
            <Text style={styles.text}> {this.props.group.otherUser} </Text>
          </View>
          <View style={styles.addTodoButtonContainer}>
            <Image
              style={styles.addTodoButton}
              source={require('../../../images/plus.png')}/>
          </View>
        </View>
        <View>
          <Picker
            selectedValue={this.state.category}
            onValueChange={(type) => this.setState({category: type})}>
            <Picker.Item label="Lights" value="lights" />
            <Picker.Item label="Plumbing" value="plumbing" />
            <Picker.Item label="Doors" value="doors" />
            <Picker.Item label="Windows" value="windows" />
          </Picker>
          <TextInput
            onChangeText={(text) => this.setState({description: text})}
            value={this.state.description}
            style={styles.descriptionInput}
          />
          <TextInput
            onChangeText={(text) => this.setState({body: text})}
            value={this.state.body}
            style={styles.bodyInput}
          />
        </View>

      </View>
    );
  }
}

export default GroupHome;
