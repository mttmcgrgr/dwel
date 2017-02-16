import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GroupHome from './group_home';


const styles = StyleSheet.create({
  container: {
    height: 65,
    marginBottom: 5,
    borderRadius:50,
    borderWidth: 1,
    borderColor: 'grey',
  },
  text: {
    marginLeft: 12,
    fontSize: 12,
    height: 14,
    color: "white",
  },
  button: {
    padding: 12,
    backgroundColor:'#68a0cf',
    borderRadius:50,
    borderWidth: 1,
    borderColor: '#fff',
    height: 65,
    width: 300,
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
            key code: {this.props.group.token}
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
