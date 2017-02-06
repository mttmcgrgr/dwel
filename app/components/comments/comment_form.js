import React from 'react';
import {View, Text, Form, Picker, TextInput, StyleSheet, Button } from 'react-native';
import Group from '../groups/group';

class TodosForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: "",
      category: "",
      group_id: {this.props.group.id}
    }
  }
  //
  // _onForward() {
  //   this.props.navigator.push({
  //     component: Group,
  //     title: 'Key Code',
  //     passProps: {
  //       username: this.state.username,
  //       password: this.state.password
  //     },
  //   });
  // }

  render () {
    return (
      <View>
        <Picker
          selectedValue={this.state.type}
          onValueChange={(type) => this.setState({category: type})}>
          <Picker.Item label="Lights" value="lights" />
          <Picker.Item label="Plumbing" value="plumbing" />
          <Picker.Item label="Doors" value="doors" />
          <Picker.Item label="Windows" value="windows" />
        </Picker>
        <TextInput
          onChangeText={(text) => this.setState({body: text})}
          value={this.state.body}
        />
      </View>
    )
  }
}

export default TodosForm;
