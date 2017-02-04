'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableOpacity, TextInput,
				 Button, Image, AsyncStorage, Actions } from 'react-native';
import Keycode from './Keycode';
import Login from './Login';
import { createAccount } from '../../actions/session_actions';

class SignUp extends Component {
	constructor(props) {
		super(props);
		debugger;
		this.state = {
			username: "",
			password: "",
			errors: "",
		currentUser: ""
		};
		this._goToLogin = this._goToLogin.bind(this);
		this._goToKeycode = this._goToKeycode.bind(this);
		this.createUser = this.createUser.bind(this);
	}



		_goToLogin() {
    this.props.navigator.push({
    component: Login,
    title: 'Log In',
    passProps: {
			username: this.state.username,
		 	password: this.state.password
	  	}
  	});
   }

	 _goToKeycode() {
		this.props.navigator.push({
		component: Keycode,
		title: 'Key Code',
		passProps: {
		 username: this.state.username,
		 password: this.state.password
		 }
	 });
	 }


	 createUser(){
		 let user = {
			 username: this.state.username,
			 password: this.state.password
		 };
		 createAccount(user).then(response => {
        if (response.responseData.session_token) {
					this.setState({
					currentUser: response.responseData.username
				});
        } else {
          this.setState({
            errors: response.responseData
          });
        }
      });
     }





	render(){
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
					style={styles.button}
					onPress={this.createUser}>
	          <Text style={styles.buttonText}>
	            Sign Up
	          </Text>
        </TouchableOpacity>
				<Text style={styles.title}>
					Already Have an Account?
				</Text>
				<TouchableOpacity
						style={styles.login}
						onPress={this._goToLogin}>
		          <Text style={styles.buttonText}>
		            Login
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
	},

	login: {
		height: 30,
		width: 200,
		// borderColor: 'gray',
		flexDirection: 'row',
	  justifyContent: 'space-between',
		// backgroundColor: 'white',
		alignItems: 'center',
		left: 70,
		padding: 10,
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
		// borderColor: 'gray',
		paddingTop: 8,
		paddingBottom: 5,
		fontSize: 12,
		// borderWidth: 1,
		width: 200,
		fontWeight: 'bold',
		textAlign: 'center',
		left: -10
	},

	title: {
		height: 30,
		width: 200,
		flexDirection: 'row',
	  justifyContent: 'center',
		alignItems: 'center',
		left: 70,
		padding: 10,
		textAlign: 'center'
	}

});


module.exports = SignUp;
