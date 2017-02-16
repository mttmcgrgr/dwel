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
		this._goToGroupIndex = this._goToGroupIndex.bind(this);

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
			})
			.then((response) => response.json())
		 .then(response => {
			 if(response.username){
				 this.setState({
				 currentUser: response
				});
			 } else {
				 this.setState({
					 errors: response[0]
				 });
			 }
		 });
		 setTimeout(this._goToGroupIndex, 500);
		}

		_goToGroupIndex() {
		 if(this.state.currentUser.username){
     this.props.navigator.push({
     component: GroupIndex,
     title: 'Groups',
     passProps: {
 			currentUser: this.state.currentUser,
			groups: this.state.currentUser.groups
 	  	 }
   	 });
     }
	  }


	render() {

		return (
		<View style={styles.inputForm} >
			<Image source={require('../../../docs/images/back.png')}  style={styles.backgroundImage}>
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
					autoComplete={false}
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
					style={styles.button}>
	          <Text style={styles.buttonText}>
	            Login
	          </Text>
        </TouchableOpacity>
				<Text style={styles.errors}>
					{this.state.errors}
				</Text>
			</Image>
		</View>
		);
	}

}

const styles = StyleSheet.create({

	usernameInput:{
		  height: 50,
			borderColor: 'gray',
			padding: 10,
			fontSize: 20,
			borderWidth: 1,
			width: 280,
			marginBottom: 10,
			marginTop: 10,
			backgroundColor: "white",
			borderRadius:10,
			left: 40

	},

	passwordInput: {

		  height: 50,
			borderColor: 'gray',
			padding: 10,
			borderWidth: 1,
			width: 280,
			fontSize: 20,
			marginBottom: 20,
			backgroundColor: "white",
			borderRadius:10,
			left: 40
 	},

	inputForm: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
		flexDirection: 'column',
		padding: 10,
		backgroundColor: 'white',

	},

	backgroundImage: {
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
		width: 355,
		height: 150,
  },

	button: {
		height: 50,
		width: 280,


		flexDirection: 'row',
	  justifyContent: "center",
		backgroundColor:'#68a0cf',
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#fff',
		alignItems: 'center',
		left: 40,
		marginTop: 5
	},

	login: {
		height: 30,
		width: 200,
		flexDirection: 'row',
	  justifyContent: 'space-between',
		alignItems: 'center',
		left: 70,
		padding: 10,
	},

	logo: {
		justifyContent:'center',
		width: 60,
		height: 60,
		left: 142
	},

	buttonText: {
		flex: 1,
		height: 30,
		// paddingTop: 8,
		// paddingBottom: 10,
		width: 100,
		borderRadius:10,
		textAlign: 'center',
		fontSize: 20,
		justifyContent: "center",
		color:'#fff',
	},

	title: {
		height: 30,
		width: 200,
		backgroundColor: 'rgba(0,0,0,0)',
		flexDirection: 'row',
	  justifyContent: 'center',
		alignItems: 'center',
		left: 75,
		padding: 10,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 10,
		marginTop: 80,
	},
	errors: {
		height: 30,
		width: 300,
		color: "red",
		flexDirection: 'row',
	  justifyContent: 'center',
		alignItems: 'center',
		left: 30,
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0)',
		textAlign: 'center',
		fontSize: 20
	}


});


module.exports = Login;
