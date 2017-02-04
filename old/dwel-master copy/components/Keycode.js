'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,
	       TouchableHighlight, TextInput,
				 Button, Image } from 'react-native';

class Keycode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
      keycode: ""
		};
		this.createAccount = this.createAccount.bind(this);
		this._onForward = this._onForward.bind(this);
    this.keyGenerator = this.keyGenerator.bind(this);
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
    title: 'Key Code',
    passProps: {
			username: this.state.username,
		 	password: this.state.password
		},
  });
  }

  keyGenerator(){
    return Math.random().toString(36).slice(2,7);
  }



	render() {
		return (
		<View style={styles.inputForm}>
				<Text style={styles.title}>
					Enter Your Key Or Use Key Below
				</Text>
				<Image
					style={styles.logo}
					source={require('../images/logo.png')}
				/>
				<TextInput
					style={styles.passwordInput}
					placeholder="Ex: 1234567"
					onChangeText={(text) => this.setState({keycode: text})}
					value={this.state.keycode}
				/>
				<TouchableHighlight
					style={styles.button}>
	          <Text style={styles.buttonText}>
	            Continue
	          </Text>
        </TouchableHighlight>
        <Text style={styles.title}>
              New Key
        </Text>

        <Text style={styles.title}>
          {this.keyGenerator()}
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
		paddingTop: 8,
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
		padding: 10,
		textAlign: 'center'

	}

});


module.exports = Keycode;
