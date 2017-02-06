import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GroupHome from './group_home';


const styles = StyleSheet.create({
  container: {
    height: 65,
    marginBottom: 5,
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
  },
  button: {
    padding: 12,
    borderWidth: 1,
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderRadius: 5,
    height: 65,
    width: 350,
    fontFamily: 'serif',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-around',

  }
});

class GroupIndexItem extends React.Component {

  constructor (props) {
    super(props);
    console.log(this.props);
    this._onForward = this._onForward.bind(this);
  }

  _onForward () {
    this.props.navigator.push({
      component: GroupHome,
      title: 'Group',
      passProps: {
        group: this.props.group,
        currentUser: this.props.currentUser

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
