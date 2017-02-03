'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableOpacity, TextInput,
				 Button, Image, AsyncStorage, Actions } from 'react-native';
import Keycode from './Keycode';
import GroupIndex from '../groups/group_index';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			errors: "",
			currentUser: ""
		};
		this.Login = this.Login.bind(this);

	}

  Login(){
 		fetch('http://localhost:3000/api/session', {
 			  method: 'POST',
 			  headers: {
 			    'Accept': 'application/json',
 			    'Content-Type': 'application/json',
 			  },
 			  body: JSON.stringify( {user:{
 			    username: this.state.username,
 			    password: this.state.password
 			  }})
 	   	});

			this.setState({
				currentUser: this.state.username
			});
	 }

	 _goToGroupIndex() {
	 this.props.navigator.push({
	 component: GroupIndex,
	 title: 'Your Groups',
	 passProps: {
		 username: this.state.username,
		 password: this.state.password,
		 keycode: this.state.keycode,
		 currentUser: this.state.currentUser
	 }
 });
 }


	render() {
		return (
		<View style={styles.inputForm}>
				<Text style={styles.title}>
					D W E L
				</Text>
				<Image
					style={styles.logo}
					source={require('../../../images/logo.png')}
				/>
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
			<TouchableOpacity
					onPress={this.Login}
					onPress={this._goToGroupIndex}
					style={styles.button}>
	          <Text style={styles.buttonText}>
	            Log In
	          </Text>
        </TouchableOpacity>
				<Text style={styles.title}>
					{this.state.errors}
				</Text>
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
			backgroundColor: "white",
			left: 70

	},

	passwordInput: {

		  height: 30,
			borderColor: 'gray',
			padding: 10,
			fontSize: 12,
			borderWidth: 1,
			width: 200,
			marginBottom: 20,
			backgroundColor: "white",
			left: 70
 	},

	inputForm: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
		padding: 10,
		backgroundColor: '#259ebc',

	},

	button: {
		height: 30,
		width: 200,
		borderColor: 'gray',
		flexDirection: 'row',
	  justifyContent: 'space-between',
		backgroundColor: 'white',
		alignItems: 'center',
		left: 70,
		padding: 10,
    marginTop: 10
	},

	logo: {
		justifyContent:'center',
		width: 50,
		height: 50,
		left: 142,
		marginBottom: 20
	},

	buttonText: {
		height: 30,
		borderColor: 'gray',
		paddingTop: 10,
		paddingBottom: 5,
		fontSize: 12,
		borderWidth: 1,
		width: 200,
		backgroundColor: "white",
		fontWeight: 'bold',
		textAlign: 'center',
		left: -10
	},

	title: {
		height: 30,
		width: 200,
		flexDirection: 'row',
	  justifyContent: 'space-between',
		alignItems: 'center',
		left: 70,
		padding: 20,
		textAlign: 'center'

	}

});


module.exports = Login;
