
import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TodosReducer from './todos_reducer';
import CommentsReducer from './comments_reducer';
import GroupReducer from './group_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  groups: GroupReducer,
  todos: TodosReducer,
  comments: CommentsReducer,
});

export default rootReducer;
