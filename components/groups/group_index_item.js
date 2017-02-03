import React from 'react';
import {View, Text, Form, Picker, ListView, TextInput, StyleSheet, Button } from 'react-native';


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
  }
});
class GroupIndexItem extends React.Componenet {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {props.group.address}
        </Text>
        <Text style={styles.text}>
          `${props.group.todo_count} todos`
        </Text>
      </View>
    );
  }
}



export default GroupIndexItem;
