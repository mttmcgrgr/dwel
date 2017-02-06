import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import CommentIndex from '../comments/comments_index';

const styles = StyleSheet.create({
  todoDetailPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 60,
    padding: 10,
    backgroundColor: '#259ebc',
  },
  todoDetailContainer: {
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: 40,
    width: 300,
    marginBottom: 5
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  commentIndex: {
    flex: 0.95,

  },
  buttonText: {
		height: 30,
		// borderColor: 'gray',
		paddingTop: 8,
		paddingBottom: 5,
		fontSize: 12,
		// borderWidth: 1,
		fontWeight: 'bold',
		textAlign: 'center',
		left: -10
	},
  commentContainer: {
    flex: .05,
    width: 260,
    flexDirection: 'row',
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
    backgroundColor: 'orange',

  },
  button: {
    flex: .2,
		borderColor: 'gray',
	  justifyContent: 'space-between',
		backgroundColor: 'white',
		alignItems: 'center'
	},
  commentInput:{
		  flex: .8,
			borderColor: 'gray',
			fontSize: 12,
			borderWidth: 1,
			backgroundColor: "white",

	},
});
class TodoDetail extends React.Component {

  constructor (props) {
    super(props);
    // console.log(props);
    this.post = this.post.bind(this);
    this.state = {
      comment: "",
      comments: []
    }
  }

  componentDidMount() {
    // console.log(this.state);
    this.setState({

      comments: this.props.todo.comments
    })
  }

  post() {
    // console.log(this.props);
    // console.log(this.state);
    fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comments: {
          comment: this.state.comment,
          todo_id: 1,
          username: "example"
        }})
      })
      .then((response) => response.json())
     .then(response => {
       if (response.comment){
         let comments = this.state.comments;
         comments.push(response);
         this.setState({
         comment: "",
         comments
        });

        console.log(this.state);
       } else {
         this.setState({
           errors: response.responseData
         });
       }
     });
    //  console.log(this.state);

    }


  render () {
    // console.log(this.state.comments);
    // console.log(this.props.todo.comments);
    return (
      <View style={styles.todoDetailPage}>
        <View style={styles.todoDetailContainer}>
          <Text style={styles.text}>
            {this.props.todo.description}
          </Text>
          <Text style={styles.text}>
            resolved: {this.props.todo.resolved}
          </Text>
        </View>
        <View style={styles.commentIndex}>
          <CommentIndex navigator={this.props.navigator} comments={this.state.comments}/>

        </View>
        <View style={styles.commentContainer}>
          <TextInput
            style={styles.commentInput}
            onChangeText={(text) => this.setState({comment: text})}
            value={this.state.comment}
            />
          <TouchableOpacity
            style={styles.button}
            onPress={this.post}>
            <Text style={styles.buttonText}>
              Post
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default TodoDetail;
