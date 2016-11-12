export const RECEIVE_ISSUES = 'LOCATION_CHANGE'

export const getIssues = (page, size) => {
  const url = `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=${size}`;
  return dispatch => {
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveIssues(json)))
      .catch(e => console.log('Fetch error occurred'))
  }
}

export function receiveIssues (issues = []) {
  return {
    type    : RECEIVE_ISSUES,
    payload : issues
  }
}

const initialState = [];
export default function issueReducer (state = initialState, action) {
  return action.type === RECEIVE_ISSUES
    ? action.payload
    : state
}
