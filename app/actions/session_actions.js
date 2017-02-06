// import * as APIUtil from '../util/session_api_util';
// import { Link, hashHistory } from 'react-router';
//
// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
//
// export const signup = user => dispatch => (
//   APIUtil.signup(user)
//     .then(user1 => dispatch(receiveCurrentUser(user1)),
//       err => dispatch(receiveErrors(err.responseJSON)))
// );
//
// export const login = user => dispatch => (
//   APIUtil.login(user)
//     .then(user1 => dispatch(receiveCurrentUser(user1)),
//       err => dispatch(receiveErrors(err.responseJSON)))
// );
//
// export const logout = () => dispatch => (
//   APIUtil.logout().then(user => dispatch(receiveCurrentUser(null))).then(
//   () => hashHistory.replace("/login")
//   )
// );
//
// export const receiveCurrentUser = currentUser => ({
//   type: RECEIVE_CURRENT_USER,
//   currentUser
// });
//
// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
//
// import * as APIUtil from '../util/session_api_util';
//
// export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
//
// export const receiveUser = responseData => ({
//   type: RECEIVE_USER,
//   responseData
// });
//
// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });
//
// export const signupUser = user => dispatch => (
//   APIUtil.registerUser(user)
//     .then((response) => response.json())
//     .then(responseData => dispatch(receiveUser(responseData)))
//     .catch(err => dispatch(receiveErrors(err.responseJSON)))
// );
//
// export const loginUser = user => dispatch => (
//   APIUtil.authenticateUser(user)
//     .then((response) => response.json())
//     .then(responseData => dispatch(receiveUser(responseData)))
//     .catch(err => dispatch(receiveErrors(err.responseJSON)))
// );
