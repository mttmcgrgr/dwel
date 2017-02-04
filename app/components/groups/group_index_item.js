import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GroupHome from './group_home';


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderRadius: 5,
    height: 65,
    width: 350,
    marginBottom: 5,
    fontFamily: 'serif'
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
    marginBottom: 10
  },
  button: {
    padding: 12,
    flex: 1
  }
});

class GroupIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this._onForward = this._onForward.bind(this);
  }

  _onForward () {
    this.props.navigator.push({
      component: GroupHome,
      title: 'Group',
      passProps: {
        group: this.props.group
      }
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._onForward}>
          <Text style={styles.text}>
            {this.props.group.address}
          </Text>
          <Text style={styles.text}>
            {this.props.group.todos.length} outstanding todo(s)
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}



export default GroupIndexItem;
