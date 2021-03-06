import React from 'react';
import {View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';
// import {switch} from 'react-native-switch'
import TodoDetail from './todo_detail';

const styles = StyleSheet.create({
  container: {
    height: 50
  },
  todoItem: {
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderRadius: 50,
    height: 40,
    width: 260,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    color: 'white'
  }
});

class TodosIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this._onForward = this._onForward.bind(this);
    this.state = {
      resolved: this.props.todo.resolved
    };
  }

  _onForward() {
    this.props.navigator.push({
      component: TodoDetail,
      title: 'Todo',
      passProps: {
        todo: this.props.todo,
        currentUser: this.props.currentUser,
        resolved: this.props.todo.resolved
      }
    });
  }
  //
  createNewTodo(){
    fetch('http://localhost:3000/api/todos', {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({todo:{
          resolved: this.state.description,
        }})
      })
      .then((response) => response.json())
     .then(response => {
       console.log(response);
       if (response.length > 0){
         this.setState({
         todos: response,
         visibleForm: false
        });
       } else {
         this.setState({
           errors: response[0]
         });
       }
     });
    }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this._onForward}
          style={styles.todoItem}>
          <Text style={styles.text}>
            {this.props.todo.description}
          </Text>
          <Switch
            onValueChange={(value) => this.setState({resolved: value})}

            value={this.state.resolved} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TodosIndexItem;
