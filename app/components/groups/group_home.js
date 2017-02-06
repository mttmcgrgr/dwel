import React from 'react';
import {View, Text, Image, Picker, TextInput, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import TodosIndex from '../todos/todos_index';
import TodosIndexItem from '../todos/todos_index_item.js';
// import TodoForm from '../todos/todos_form';

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  },
  groupInfoContainer: {
    width: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  text: {
    width: 300,
    marginLeft: 12,
    fontSize: 16,
  },
  indexPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    backgroundColor: '#259ebc',

  },
  addTodoButton: {
    width: 20,
    height: 20
  },
  addTodoButtonContainer: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listViewContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  listContainer: {
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  descriptionInput: {
    borderColor: 'gray',
    padding: 10,
    fontSize: 12,
    borderWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
  },
  bodyInput: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    width: 300,
    padding: 10,
    fontSize: 12,
    marginBottom: 10,
    backgroundColor: "white",
  },
  form: {
    marginTop: 30,
    height: 400,
    width: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  buttonText: {
    flex: 1,
    height: 40,
    paddingTop: 8,
    paddingBottom: 10,
    width: 190,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    justifyContent: "center"
  },
  button: {
    height: 50,
    width: 280,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: "center",
    backgroundColor: '#efbc45',
    alignItems: 'center',
    left: 40,
    marginTop: 5
  },

});


class GroupHome extends React.Component {
  constructor(props) {
    super(props);
    ;
    this.changeFormVisibility = this.changeFormVisibility.bind(this);
    this.formVisibility = this.formVisibility.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
    this.state = {
      description: "",
      category: "",
      body: "",
      visibleForm: false,
      todos: this.props.group.todos,
      errors: ""
    }
  }
  createNewTodo(){
    fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({todo:{
          description: this.state.description,
          category: this.state.category,
          body: this.state.body,
          group_id: this.props.group.id
        }})
      })
      .then((response) => response.json())
     .then(response => {
       console.log(response);
       if (response.length > 0){
         this.setState({
         todos: response,
         visibleForm: false
        });
       } else {
         this.setState({
           errors: response[0]
         });
       }
     });
    }

    formVisibility () {
      if (this.state.visibleForm) {
        return (
          <View style={styles.form}>
            <TextInput
              onChangeText={(text) => this.setState({description: text})}
              value={this.state.description}
              placeholder="Description"
              style={styles.descriptionInput}
            />
            <TextInput
              onChangeText={(text) => this.setState({body: text})}
              value={this.state.body}
              placeholder="Body"
              style={styles.bodyInput}
            />
            <Picker
              style={styles.picker}
              selectedValue={this.state.category}
              onValueChange={(type) => this.setState({category: type})}>
              <Picker.Item label="Lights" value="lights" />
              <Picker.Item label="Plumbing" value="plumbing" />
              <Picker.Item label="Doors" value="doors" />
              <Picker.Item label="Windows" value="windows" />
            </Picker>
            <TouchableOpacity
                onPress={this.createNewTodo}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                    Create Todo
                  </Text>
               </TouchableOpacity>
          </View>
        )
      } else {
        console.log(this.state.todos);
        return (
          <View style={styles.listViewContainer}>
            <ScrollView>{this.state.todos.map( (data) => (
              <TodosIndexItem
              navigator={this.props.navigator}
              todo={data}/>))}</ScrollView>
          </View>
        )
      }
    }

    changeFormVisibility () {
      if (this.state.visibleForm) {
        this.setState({visibleForm: false})
      } else {
        this.setState({visibleForm: true})
      }
    }

  render () {
    return (
      <View style={styles.indexPage}>
        <View style={styles.container}>
          <View style={styles.groupInfoContainer}>
            <Text style={styles.text}> {this.props.group.address}</Text>
            <Text style={styles.text}> {this.props.group.otherUser} </Text>
          </View>
          <TouchableOpacity
          style={styles.addTodoButtonContainer}
          onPress={this.changeFormVisibility}>
            <Image
              style={styles.addTodoButton}
              source={require('../../../images/plus.png')}/>
          </TouchableOpacity>
        </View>
        {this.formVisibility()}
      </View>
    );
  }
}

export default GroupHome;
