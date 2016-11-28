export function publicationsRequest() {
  return { type: 'PUBLICATIONS_REQUEST' };
}

export function publicationsSuccess(payload) {
  return { type: 'PUBLICATIONS_SUCCESS', payload };
}

export function publicationsFailure(error) {
  return { type: 'PUBLICATIONS_FAILURE', error };
}
