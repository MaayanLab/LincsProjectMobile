import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
});

export default rootReducer;
