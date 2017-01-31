
import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import TodosReducer from './todos_reducer';
import MessagesReducer from './messages_reducer';
import BookingsReducer from './bookings_reducer';
import FiltersReducer from './filters_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  todos: TodosReducer,
  messages: MessagesReducer,
  bookings: BookingsReducer,
  filters: FiltersReducer,
  search: SearchReducer
});

export default rootReducer;
