import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';
import publicationsReducer from './publications';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  publications: publicationsReducer,
});

export default rootReducer;
