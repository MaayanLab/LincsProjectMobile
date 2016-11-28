import * as PublicationActionTypes from '../actions/publications';

const initialState = {
  pubs: [],
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PublicationActionTypes.PUBLICATIONS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PublicationActionTypes.PUBLICATIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pubs: action.payload,
        error: null,
      };
    case PublicationActionTypes.PUBLICATIONS_FAILURE:
    default:
      return state;
  }
};
