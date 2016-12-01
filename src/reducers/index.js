import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';
import publicationsReducer from './publications';
import newsReducer from './news';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  publications: publicationsReducer,
  news: newsReducer,
});

export default rootReducer;
