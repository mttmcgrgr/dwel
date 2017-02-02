
import SessionForm from './frontend/components/SessionForm';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

export default class Dwel extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: SessionForm,
          title: 'Create Account',
        }}
        style={{flex: 1}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259ebc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "white"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  statusBarBackground: {
    height: 20,
    backgroundColor: "white"
  }
});

AppRegistry.registerComponent('Dwel', () => Dwel);
