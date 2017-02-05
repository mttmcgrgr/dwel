'use strict';
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,
         TextInput, Button, Image } from 'react-native';
import GroupIndex from '../groups/group_index';

class Keycode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
      keycode: "",
			errors: "",
			currentUser: this.props.currentUser
		};
		this.createAccount = this.createAccount.bind(this);
		this._goToGroupIndex = this._goToGroupIndex.bind(this);
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


		_goToGroupIndex() {
    this.props.navigator.push({
    component: GroupIndex,
    title: 'Your Groups',
    passProps: {
			keycode: this.keyGenerator,
			currentUser: this.props.currentUser,
			groups: [{id: 1, address: "650 S. Spring St. Apt. 1006", otherUser: "Barry Shy",
			todos: [{description: "Fix sink", body: "the sink has been leaking for days", category: "plumbing", resolved: false},
			{description: "Ants", body: "There are ants coming out of the wall behind the couch", category: "pests", resolved: false}]},
			{id: 2, address: "1228 Evelyn Ave.", otherUser: "Sally Rice",
				todos: [{description: "Air conditioner broken", body: "The air conditioner isn't working", category: "utilities", resolved: false},
				{description: "Washing machine is leaking", body: "It't getting EVERYWHERE", category: "plumbing", resolved: false}]}]
		}
  });
  }




  keyGenerator(){
    return Math.random().toString(36).slice(2,8);
  }



	render() {
    console.log(this.props.currentUser);
    console.log(this.state.currentUser);
		return (
		<View style={styles.inputForm}>
				<Text style={styles.title}>
					Enter Key To Join Group
				</Text>
				<Image
					style={styles.logo}
					source={require('../../../images/logo.png')}
				/>
				<TextInput
					style={styles.passwordInput}
					placeholder="Ex: abc123"
					onChangeText={(text) => this.setState({keycode: text})}
					value={this.state.keycode}
				/>
				<TouchableOpacity
					style={styles.button}>
	          <Text style={styles.buttonText}>
	            Join Group
	          </Text>
        </TouchableOpacity>
        <Text style={styles.title}>
                Or
        </Text>
				<TouchableOpacity
					onPress={this._goToGroupIndex}
					style={styles.button}>
	          <Text style={styles.buttonText}>
	            Create New Group
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
		backgroundColor: '#efbc45',
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
		backgroundColor: "#efbc45",
		fontWeight: 'bold',
		textAlign: 'center',
		left: -10
	},

	title: {
		height: 30,
		width: 200,
	  justifyContent: 'center',
		alignItems: 'center',
		left: 70,
		padding: 10,
		textAlign: 'center'
	}

});


module.exports = Keycode;
