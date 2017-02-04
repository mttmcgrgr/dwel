import * as APIUtil from '../util/todos_api_util';

export const RECEIVE_ALL_TODOS = "RECEIVE_ALL_TODOS";
export const RECEIVE_SINGLE_TODO = "RECEIVE_SINGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveAllTodos = todos => ({
  type: RECEIVE_ALL_TODOS,
  todos
});

export const receiveSingleTodo = todo => ({
  type: RECEIVE_SINGLE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});

export const fetchAllTodos = () => dispatch => (
  APIUtil.fetchAllTodos()
  .then(todos => dispatch(receiveAllTodos(todos)))
);

export const fetchTodo = id => dispatch => (
  APIUtil.fetchTodo(id)
  .then(todo => dispatch(receiveSingleTodo(todo)))
);

export const createTodo = todo => dispatch => (
  APIUtil.createTodo(todo)
  .then(todo1 => dispatch(receiveSingleTodo(todo1)))
);

export const deleteTodo = id => dispatch => (
  APIUtil.deleteTodo(id)
  .then(todo => dispatch(removeTodo(todo)))
);
