import * as DGBActionTypes from '../actions/DGB';

const initialState = {
  genes: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DGBActionTypes.DGB_SUBMIT_INITIALIZE:
      return {
        ...state,
        isFetching: true,
      };
    case DGBActionTypes.DGB_SUBMIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        genes: action.payload,
        error: null,
      };
    case DGBActionTypes.DGB_SUBMIT_FAILURE:
    default:
      return state;
  }
};
