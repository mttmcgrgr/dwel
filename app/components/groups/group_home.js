import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TodosIndex from '../todos/todos_index';
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
  }
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
        <TodosIndex navigator={this.props.navigator} todos={this.props.group.todos}/>
      </View>
    );
  }
}

export default GroupHome;
