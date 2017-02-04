<<<<<<< HEAD
import { RECEIVE_USER,
         RECEIVE_ERRORS } from '../actions/session_actions';
=======
import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/session_actions';
>>>>>>> 25b1a6396ac73323ac5d8cb3afd02f4285c7f133
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

<<<<<<< HEAD
const authenticationReducer = (state = _defaultState, action) => {
  Object.freeze(state);


=======
const userReducer = (state = _defaultState, action) => {
  Object.freeze(state);

>>>>>>> 25b1a6396ac73323ac5d8cb3afd02f4285c7f133
  switch(action.type) {
    case RECEIVE_USER:
      return action.responseData;
    case RECEIVE_ERRORS:
      return merge({}, _defaultState, {
        errors: action.errors
      });
    default:
      return state;
  }
};

<<<<<<< HEAD
export default authenticationReducer;

// export Default SessionReducer;
=======
export default userReducer;
>>>>>>> 25b1a6396ac73323ac5d8cb3afd02f4285c7f133
