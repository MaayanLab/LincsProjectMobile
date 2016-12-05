export const TOOLS_REQUEST = 'TOOLS_REQUEST';
export const TOOLS_SUCCESS = 'TOOLS_SUCCESS';
export const TOOLS_FAILURE = 'TOOLS_FAILURE';

export function toolsRequest() {
  return { type: TOOLS_REQUEST };
}

export function toolsSuccess(payload) {
  return { type: TOOLS_SUCCESS, payload };
}

export function toolsFailure(error) {
  return { type: TOOLS_FAILURE, error };
}

export function loadTools() {
  return (dispatch, getState) => {
    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(toolsRequest());
    return fetch('http://lincsproject.org/LINCS/api/v1/tools')
      // .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for tools was successful. Dispatch a success action.
      .then(tools => dispatch(toolsSuccess(tools)))
      // The request for tools was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(toolsFailure(error)));
  };
}
