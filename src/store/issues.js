export const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS';
export const RECEIVE_LINKS = 'RECEIVE_LINKS';
const URL_ROOT = 'https://api.github.com/'

const handleErrors = (response) => {
  if (response.status === 200) {
    return response.json()
  } else {
    console.log('Error: a fetch error occurred.')
    return []
  }
}

function matchLinks (links) {
  return function (pointer) {
    let strLink
    const link = links.find(link => link.endsWith(`rel="${pointer}"`))
    if (link) {
      // clean up hyperlink string
      strLink = link.replace('<', '').split('>')[0]
      return strLink
    }
  }
}

const parse = (response) => {
  if (response.status === 200) {
    const arrLinks = response.headers.get('Link').split(', ')
    const match = matchLinks(arrLinks)
    response.links = {
      next: match('next'),
      last: match('last'),
      first: match('first'),
      back: match('prev')
    }
    return response
  } else {
    console.log('Error: a fetch error occurred.')
    return {}
  }
}

// export const getIssues = (page, size) => {
export const getIssues = (_url) => {
  // todo:  add encodeuri
  const url = _url || URL_ROOT.concat(`repos/rails/rails/issues?page=1&per_page=25`)
  return dispatch => {
    return fetch(encodeURI(url))
      .then(response => parse(response))
      .then(response => {
        dispatch(receiveLinks(response.links))
        return response
      })
      .then(response => response.json())
      .then(json => dispatch(receiveIssues(json)))
      .catch(e => console.log('Error: error retrieving issues'))
  }
}

export const getComments = (issueId) => {
  const url = URL_ROOT.concat(`repos/rails/rails/issues/${issueId}/comments`)
  return dispatch => {
    return fetch(encodeURI(url))
      .then(response => handleErrors(response))
      .then(json => dispatch(receiveComments(json)))
      .catch(e => console.log('Error: error retrieving comments'))
  }
}

// export const getUserLink = (username) => {
//   const url = URL_ROOT.concat(`users/${username}`)
//   return dispatch => {
//     return fetch(encodeURI(url))
//       .then(response => handleErrors(response))
//       .then(json => dispatch(receiveUser(json)))
//       .catch(e => console.log('Error: error retrieving user info'))
//   }
// }

export function receiveIssues (issues = []) {
  return {
    type    : RECEIVE_ISSUES,
    payload : issues
  }
}

export function receiveLinks (links = []) {
  return {
    type    : RECEIVE_LINKS,
    payload : links
  }
}

export function receiveComments (comments = []) {
  return {
    type    : RECEIVE_COMMENTS,
    payload : comments
  }
}

export function removeComments () {
  return {
    type    : REMOVE_COMMENTS
  }
}

const initialState = {
  issues: [],
  comments: [],
  users: {}
}
export default function issueReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ISSUES:
      return Object.assign({}, state, { issues: action.payload })
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, { comments: action.payload })
    case REMOVE_COMMENTS:
      return Object.assign({}, state, { comments: [ ] })
    default:
      return state
  }
}
