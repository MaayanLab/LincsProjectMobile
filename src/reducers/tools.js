import * as ToolActionTypes from '../actions/tools';

const initialState = {
  tools: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ToolActionTypes.TOOLS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ToolActionTypes.TOOLS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pubs: action.payload,
        error: null,
      };
    case ToolActionTypes.TOOLS_FAILURE:
    default:
      return state;
  }
};
