export const NEWS_REQUEST = 'NEWS_REQUEST';
export const NEWS_SUCCESS = 'NEWS_SUCCESS';
export const NEWS_FAILURE = 'NEWS_FAILURE';

export function newsRequest() {
  return { type: NEWS_REQUEST };
}

export function newsSuccess(payload) {
  return { type: NEWS_SUCCESS, payload };
}

export function newsFailure(error) {
  return { type: NEWS_FAILURE, error };
}

export function loadNews() {
  return (dispatch, getState) => {
    // Get the current newsEvents from the redux state.
    const newsEvents = getState().newsEvents;
    // If the following is true, the news have already been loaded.
    if (newsEvents && newsEvents.news && newsEvents.news.length) {
      return null;
    }

    // Dispatch a redux action to let the app know that we are requesting tools.
    dispatch(newsRequest());
    return fetch('http://lincsproject.org/LINCS/api/v1/news')
      // .then(response => handleResponse(response))
      .then(response => response.json())
      // The request for news was successful. Dispatch a success action.
      .then(news => dispatch(newsSuccess(news)))
      // The request for news was unsuccessful. Dispatch a failure action.
      .catch(error => dispatch(newsFailure(error)));
  };
}
