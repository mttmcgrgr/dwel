import { combineReducers } from 'redux';
import userReducer from './session_reducer';


const rootReducer = combineReducers({
  currentUser: userReducer,
});

export default rootReducer;
