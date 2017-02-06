'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableOpacity, TextInput,
				 Button, Image, AsyncStorage, Actions } from 'react-native';
import Keycode from './Keycode';
import Login from './Login';
<<<<<<< HEAD
import GroupIndex from '../groups/group_index';
import { createAccount } from '../../actions/session_actions';
import * as APIUtil from '../../util/session_api_util';
=======

>>>>>>> 5fe5b2c14e96b2aef196ad06ffb552f4134376d2


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			errors: "",
		currentUser: {}
		};
		this._goToLogin = this._goToLogin.bind(this);
		this._goToGroupIndex = this._goToGroupIndex.bind(this);
		this._goToKeycode = this._goToKeycode.bind(this);
		this.createLandlord = this.createLandlord.bind(this);
		this.createTenant = this.createTenant.bind(this);
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
		if(this.state.currentUser.username){
		this.props.navigator.push({
			component: Keycode,
			title: 'Key Code',
			passProps: {
			 currentUser: this.state.currentUser
			 }
	   });
    }
	 }


	 createLandlord(){
		 fetch('http://localhost:3000/api/users', {
				 method: 'POST',
				 headers: {
					 'Accept': 'application/json',
					 'Content-Type': 'application/json',
				 },
				 body: JSON.stringify( {user:{
					 username: this.state.username,
					 password: this.state.password,
					 landlord: "yes"
				 }})
			 })
			 .then((response) => response.json())
			.then(response => {
        if (response.username){
					this.setState({
					currentUser: response
				 });
				 this.props.navigator.push({
		 			component: Keycode,
		 			title: 'Key Code',
		 			passProps: {
		 			 currentUser: response
		 			 }
		 	   });
        } else {
          this.setState({
            errors: response[0],
						username: "",
						password: ""
          });
        }
      });

			setTimeout(this._goToKeycode, 500);
     }



		 createTenant(){
			 fetch('http://localhost:3000/api/users', {
					 method: 'POST',
					 headers: {
						 'Accept': 'application/json',
						 'Content-Type': 'application/json',
					 },
					 body: JSON.stringify( {user:{
						 username: this.state.username,
						 password: this.state.password,
						 landlord: "no"
					 }})
				 })
				 .then((response) => response.json())
				.then(response => {
	        if (response.username){
						this.setState({
						currentUser: response.username
					 });
					 this.props.navigator.push({
			 			component: Keycode,
			 			title: 'Key Code',
			 			passProps: {
			 			 currentUser: response
			 			 }
			 	   });
	        } else {
	          this.setState({
	            errors: response[0],
							username: "",
							password: ""
	          });
	        }
	      });

				this._goToKeycode();
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
				<Text style={styles.title}>
					Create Account
				</Text>
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
				<Text style={styles.title}>
					Are You a Landlord?
				</Text>
				<TouchableOpacity
						style={styles.button}
						onPress={this.createLandlord}>
		          <Text style={styles.buttonText}>
		            Yes
		          </Text>
	        </TouchableOpacity>
			<TouchableOpacity
					style={styles.button}
					onPress={this.createTenant}>
	          <Text style={styles.buttonText}>
	             No
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
				<Text style={styles.errors}>
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
		borderWidth: 1,
		borderColor: 'gray',
		flexDirection: 'row',
	  justifyContent: "center",
		backgroundColor: '#efbc45',
		alignItems: 'center',
		left: 70,
		marginTop: 5
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
		flex: 1,
		height: 25,
		paddingTop: 8,
		paddingBottom: 10,
		fontSize: 12,
		width: 190,
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: "center"
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
	},
	errors: {
		height: 30,
		width: 200,
		color: "red",
		flexDirection: 'row',
	  justifyContent: 'center',
		alignItems: 'center',
		left: 70,
		padding: 10,
		textAlign: 'center'
	}

});


module.exports = SignUp;
