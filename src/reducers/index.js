import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';

const rootReducer = combineReducers({
  sideMenuReducer,
});

export default rootReducer;
