export const PUBLICATIONS_REQUEST = 'PUBLICATIONS_REQUEST';
export const PUBLICATIONS_SUCCESS = 'PUBLICATIONS_SUCCESS';
export const PUBLICATIONS_FAILURE = 'PUBLICATIONS_FAILURE';

export function publicationsRequest() {
  return { type: PUBLICATIONS_REQUEST };
}

export function publicationsSuccess(payload) {
  return { type: PUBLICATIONS_SUCCESS, payload };
}

export function publicationsFailure(error) {
  return { type: PUBLICATIONS_FAILURE, error };
}

export function loadPublications() {
  return (dispatch, getState) => {
    // Get the current pubsNews from the redux state.
    const pubsNews = getState().pubsNews;
    // If the following is true, the publications have already been loaded.
    if (pubsNews && pubsNews.publications && pubsNews.publications.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(publicationsRequest());
    return fetch('http://lincsproject.org/LINCS/api/v1/publications')
      // .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for publications was successful. Dispatch a success action.
      .then(publications => dispatch(publicationsSuccess(publications)))
      // The request for publications was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(publicationsFailure(error)));
  };
}
