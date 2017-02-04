import React from 'react';
import {View, Text, Form, Image, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';
import TodosIndex from '../todos/todos_index';
// import TodoForm from '../todos/todos_form';

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 350,
    padding: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  text: {
    width: 200,
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
});


class GroupHome extends React.Component {
  constructor(props) {
    super(props);
    // this.groupMember = this.groupMember.bind(this);
    // this._onForward = this._onForward.bind(this);
  }


  // groupMember () {
  //   if (current_user.id === this.props.group.user1_id) {
  //     return this.props.group.user2.username;
  //   } else {
  //     return this.props.group.user1.username;
  //   }
  // }
//
//   _onForward() {
//     this.props.navigator.push({
//       component: TodoForm,
//       title: 'Todo Form',
//       passProps: {
//         groupId: this.props.group.id
//       },
//   });
// }

// <Image
//   style={styles.addTodoButton}
//   source={require('../../images/plus.png')}
//   onPress = {this._onForward}/>



  render () {
    return (
      <View style={styles.indexPage}>
        <View style={styles.container}>
          <Text style={styles.text}> Address </Text>
          <Text style={styles.text}> {this.props.group.otherUser} </Text>
          <Text style={styles.text}> {this.props.group.address}</Text>
        </View>
        <TodosIndex navigator={this.props.navigator} todos={this.props.group.todos}/>
      </View>
    );
  }
}

export default GroupHome;
