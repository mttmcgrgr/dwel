import React from 'react';
import {View, Text, Image, Picker, TextInput, ListView, StyleSheet, TouchableOpacity} from 'react-native';
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
    flexDirection: 'column',
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
    borderColor: 'gray',
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
  bodyInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    width: 300,
    padding: 10,
    fontSize: 12,
    marginBottom: 10,
    backgroundColor: "white",
  },
  form: {
    marginTop: 30,
    height: 400,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
});


class GroupHome extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ;
    this.changeFormVisibility = this.changeFormVisibility.bind(this);
    this.formVisibility = this.formVisibility.bind(this);
    this.state = {
      dataSource: ds.cloneWithRows(this.todos()),
      description: "",
      category: "",
      body: "",
      visibleForm: false,
      todos: []
    }
  }

    todos () {
      this.state.todos.length > 0 ? this.state.todos : this.props.group.todos
    }

    formVisibility () {
      if (this.state.visibleForm) {
        return (
          <View style={styles.form}>
            <TextInput
              onChangeText={(text) => this.setState({description: text})}
              value={this.state.description}
              placeholder="Description"
              style={styles.descriptionInput}
            />
            <TextInput
              onChangeText={(text) => this.setState({body: text})}
              value={this.state.body}
              placeholder="Body"
              style={styles.bodyInput}
            />
            <Picker
              style={styles.picker}
              selectedValue={this.state.category}
              onValueChange={(type) => this.setState({category: type})}>
              <Picker.Item label="Lights" value="lights" />
              <Picker.Item label="Plumbing" value="plumbing" />
              <Picker.Item label="Doors" value="doors" />
              <Picker.Item label="Windows" value="windows" />
            </Picker>
          </View>
        )
      } else {
        return (
          <View style={styles.listViewContainer}>
            <ListView
              contentContainerStyle={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <TodosIndexItem
                navigator={this.props.navigator} todo={data}/>}/>
          </View>
        )
      }
    }

    changeFormVisibility () {
      if (this.state.visibleForm) {
        this.setState({visibleForm: false})
      } else {
        this.setState({visibleForm: true})
      }
    }

  render () {
    return (
      <View style={styles.indexPage}>
        <View style={styles.container}>
          <View style={styles.groupInfoContainer}>
            <Text style={styles.text}> {this.props.group.address}</Text>
            <Text style={styles.text}> {this.props.group.otherUser} </Text>
          </View>
          <TouchableOpacity
          style={styles.addTodoButtonContainer}
          onPress={this.changeFormVisibility}>
            <Image
              style={styles.addTodoButton}
              source={require('../../../images/plus.png')}/>
          </TouchableOpacity>
        </View>
        {this.formVisibility()}
      </View>
    );
  }
}

export default GroupHome;
