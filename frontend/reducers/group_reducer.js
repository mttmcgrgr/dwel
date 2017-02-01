import {RECEIVE_ALL_GROUPS, RECEIVE_SINGLE_GROUP, REMOVE_GROUP, }
from '../actions/groups_actions';
import merge from 'lodash/merge';

const groupsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_GROUPS:
      return action.groups;
    case RECEIVE_SINGLE_GROUP:
      return merge({}, state, action.group);
    case REMOVE_GROUP:
      let newState = merge({}, state);
      delete newState[action.group.id];
      return newState;
    default:
      return state;
  }
};

export default groupsReducer;
