import { combineReducers } from 'redux';
import userReducer from './authentication_reducer';


const rootReducer = combineReducers({
  currentUser: userReducer,
});

export default rootReducer;
