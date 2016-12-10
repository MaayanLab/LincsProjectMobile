export const DGB_SUBMIT_INITIALIZE = 'DGB_SUBMIT_INITIALIZE';
export const DGB_SUBMIT_SUCCESS = 'DGB_SUBMIT_SUCCESS';
export const DGB_SUBMIT_FAILURE = 'DGB_SUBMIT_FAILURE';

export function dgbSubmitInitialize() {
  return { type: DGB_SUBMIT_INITIALIZE };
}

export function dgbSubmitSuccess(payload) {
  return { type: DGB_SUBMIT_SUCCESS, payload };
}

export function dgbSubmitFailure(error) {
  return { type: DGB_SUBMIT_FAILURE, error };
}

export function submitDGB() {
  return (dispatch, getState) => {
    // Dispatch a redux action to let the app know that we are requesting res.
    dispatch(dgbSubmitInitialize());
    return fetch('http://amp.pharm.mssm.edu/DGB/api', {
      method: 'post',
    })
      // .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for news was successful. Dispatch a success action.
      .then(res => dispatch(dgbSubmitSuccess(res)))
      // The request for res was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(dgbSubmitFailure(error)));
  };
}
