import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';
import publicationsReducer from './publications';
import newsReducer from './news';
import toolsReducer from './tools';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  publications: publicationsReducer,
  news: newsReducer,
  tools: toolsReducer,
});

export default rootReducer;
