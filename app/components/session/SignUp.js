'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableOpacity, TextInput,
				 Button, Image, AsyncStorage, Actions } from 'react-native';
import Keycode from './Keycode';
import Login from './Login';
import GroupIndex from '../groups/group_index';
import { createAccount } from '../../actions/session_actions';
import * as APIUtil from '../../util/session_api_util';


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			errors: "",
		currentUser: ""
		};
		this._goToLogin = this._goToLogin.bind(this);
		this._goToGroupIndex = this._goToGroupIndex.bind(this);
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

	 _goToGroupIndex() {
	 this.props.navigator.push({
	 component: GroupIndex,
	 title: 'Group Index',
	 passProps: {
		 username: this.state.username,
		 password: this.state.password,
		 keycode: this.state.keycode,
		 currentUser: this.state.currentUser,
		 groups: [{id: 1, address: "650 S. Spring St. Apt. 1006", otherUser: "Barry Shy",
		 todos: [{description: "Fix sink", body: "the sink has been leaking for days", category: "plumbing", resolved: false, comments: [{id: 1, comment: "this is the first comment", username: "Victor"}, {id: 2, comment: "this is the second comment", username: "Matt"}]},
		 {description: "Ants", body: "There are ants coming out of the wall behind the couch", category: "pests", resolved: false, comments: [{id: 1, comment: "this is the first comment", username: "Me"}, {id: 2, username: "You", comment: "this is the second comment"}]}]},
		 {id: 2, address: "1228 Evelyn Ave.", otherUser: "Sally Rice",
			 todos: [{description: "Air conditioner broken", body: "The air conditioner isn't working", category: "utilities", resolved: false},
			 {description: "Washing machine is leaking", body: "It't getting EVERYWHERE", category: "plumbing", resolved: false}]}]
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

	 //  let user = {
	 // 	 username: this.state.username,
	 // 	 password: this.state.password

	 createUser(){

		 fetch('http://localhost:3000/api/users', {
				 method: 'POST',
				 headers: {
					 'Accept': 'application/json',
					 'Content-Type': 'application/json',
				 },
				 body: JSON.stringify( {user:{
					 username: this.state.username,
					 password: this.state.password
				 }})
			 })
			 .then((response) => response.json())
			.then(response => {

        if (response.username){
					this.setState({
					currentUser: response.username
				 });
        } else {
          this.setState({
            errors: response.responseData
          });
        }
      });
			console.log(this.state);

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
				<TouchableOpacity
						style={styles.button}
						onPress={this._goToGroupIndex}>
		          <Text style={styles.buttonText}>
		            Group Index
		          </Text>
	        </TouchableOpacity>
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
