import { combineReducers } from 'redux';
import sideMenuReducer from './sidemenu';
import publicationsReducer from './publications';
import newsReducer from './news';
import toolsReducer from './tools';
import DGBReducer from './DGB';

const rootReducer = combineReducers({
  sideMenu: sideMenuReducer,
  publications: publicationsReducer,
  news: newsReducer,
  tools: toolsReducer,
  DGB: DGBReducer,
});

export default rootReducer;
