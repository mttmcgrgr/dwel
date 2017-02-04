import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = responseData => ({
  type: RECEIVE_USER,
  responseData
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createAccount = user => dispatch => (
  APIUtil.createAccount(user)
    .then((response) => response.json())
    .then(responseData => dispatch(receiveUser(responseData)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);

export const loginAccount = user => dispatch => (
  APIUtil.loginAccount(user)
    .then((response) => response.json())
    .then(responseData => dispatch(receiveUser(responseData)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);
