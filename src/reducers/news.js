import * as NewsActionTypes from '../actions/news';

const initialState = {
  news: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NewsActionTypes.NEWS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case NewsActionTypes.NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        news: action.payload,
        error: null,
      };
    case NewsActionTypes.NEWS_FAILURE:
    default:
      return state;
  }
};
