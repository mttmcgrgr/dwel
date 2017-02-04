import {RECEIVE_ALL_TODOS, RECEIVE_SINGLE_TODO, REMOVE_TODO, }
from '../actions/todos_actions';
import merge from 'lodash/merge';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TODOS:
      return action.todos;
    case RECEIVE_SINGLE_TODO:
      return merge({}, state, action.todo);
    case REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
