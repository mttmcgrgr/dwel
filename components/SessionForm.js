'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight,  TextInput, Button } from 'react-native';

class SessionForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
		this.createAccount = this.createAccount.bind(this);
		this._onForward = this._onForward.bind(this);
	}

	createAccount(){
		fetch('http://localhost:3000/api/users', {
			  method: 'POST',
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			  },
			  body: JSON.stringify({
			    username: this.state.username,
			    password: this.state.password
			  })
			});
  	}

		_onForward() {
    this.props.navigator.push({
    component: Keycode,
    title: 'My Initial Scene',
    passProps: {
			username: this.state.username,
		 	password: this.state.password
		},
  });
  }




	render() {
		return (
		<View style={styles.inputForm}>
				<TextInput
					style={styles.usernameInput}
					placeholder="Username"
					onChangeText={(text) => this.setState({username: text})}
					value={this.state.username}
				/>
				<TextInput
					style={styles.passwordInput}
					placeholder="Password"
					onChangeText={(text) => this.setState({password: text})}
					value={this.state.password}
				/>
				<TouchableHighlight
					style={styles.button}>
	          <Text style={styles.usernameInput}>
	            Submit
	          </Text>
        </TouchableHighlight>
		</View>
		);
	}

}

const styles = StyleSheet.create({

	usernameInput:{
		  height: 30,
			borderColor: 'gray',
			padding: 10,
			fontSize: 12,
			borderWidth: 1,
			width: 200,
			marginBottom: 10,
			backgroundColor: "white"
	},

	passwordInput: {

		  height: 30,
			borderColor: 'gray',
			padding: 10,
			fontSize: 12,
			borderWidth: 1,
			width: 200,
			marginBottom: 20,
			backgroundColor: "white"
 	},

	inputForm: {
		alignItems: "stretch",
		justifyContent: "center",
		height: 30,
		padding: 10,
		width: 100,
		top: 40,
		left: -60
	},

	button: {
		height: 30,
		width: 200,
		borderColor: 'gray',
		backgroundColor: 'white',
		flexDirection: 'row',
	  justifyContent: 'space-between'
	}

});


module.exports = SessionForm;
