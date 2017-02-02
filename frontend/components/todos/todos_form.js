import React from 'react';
import {View, Text, Form, Picker, TextInput, StyleSheet, Button } from 'react-native';

class TodosForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: "",
      type: "",
      groupId: {this.props.groupId}
    }
  }

  render () {
    return (
      <View>
        <Picker
          selectedValue={this.state.type}
          onValueChange={(type) => this.setState({language: type})}>
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
