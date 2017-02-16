'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableOpacity, TextInput,
				 Button, Image, AsyncStorage, Actions } from 'react-native';
import Keycode from './Keycode';
import Login from './Login';


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



	 _goToKeycode() {
		if(this.state.currentUser.username){
		this.props.navigator.push({
			component: Keycode,
			title: 'Add a Group',
			passProps: {
			 currentUser: this.state.currentUser,
			 groups: this.state.currentUser.groups
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

				setTimeout(this._goToKeycode, 500);
	     }





	render(){
		return (
		<View style={styles.inputForm}>
			<Image source={require('../../../docs/images/back.png')}  style={styles.backgroundImage}>
				<Text style={styles.title2}>
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
					autoComplete={false}
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
					Have an Account?
				</Text>
				<TouchableOpacity
						style={styles.login}
						onPress={this._goToLogin}>
		          <Text style={styles.buttonText2}>
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
			backgroundColor: "white",
			left: 40,
			borderRadius:10,
	},


	passwordInput: {

		  height: 50,
			borderColor: 'gray',
			padding: 10,
			fontSize: 20,
			borderWidth: 1,
			borderRadius:10,
			width: 280,

			// marginBottom: 20,
			backgroundColor: "white",
			left: 40
 	},

	inputForm: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
		flexDirection: 'column',
		padding: 10,
		backgroundColor: 'rgba(0,0,0,0)',

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
	submit:{
		alignItems: 'center',
		justifyContent: "center",
		marginRight:40,
		marginLeft:40,
		marginTop:10,
		paddingTop:10,
		paddingBottom:10,
		backgroundColor:'#68a0cf',
		borderRadius:10,
		borderWidth: 1,
		borderColor: '#fff'
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
	buttonText2: {
		flex: 1,
		height: 30,
		// paddingTop: 8,
		// paddingBottom: 10,
		width: 100,
		borderRadius:10,
		textAlign: 'center',
		fontSize: 20,
		justifyContent: "center",
		color:'#68a0cf',
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
	backgroundImage: {
		flex: 1,
		resizeMode: 'stretch', // or 'stretch'
		width: 355,
		height: 150,
	},

	logo: {
		justifyContent:'center',
		width: 60,
		height: 60,
		left: 142
	},



	title: {
		height: 30,
		width: 200,
		flexDirection: 'row',
	  justifyContent: 'center',
		alignItems: 'center',
		left: 75,
		padding: 10,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 10,

	},
	title2: {
		height: 30,
		width: 200,
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
		height: 35,
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


module.exports = SignUp;
