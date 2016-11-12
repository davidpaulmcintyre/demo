export const RECEIVE_PAGINATION = 'RECEIVE_PAGINATION'

export function setCurrentPage (newPage) {
  return {
    type    : RECEIVE_PAGINATION,
    payload : newPage
  }
}

const initialState = {
  links: {},
  page: 1,
  size: 25
}
export default function paginationReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PAGINATION:
      return Object.assign({}, state, { page: action.payload })
    case 'RECEIVE_LINKS':
      return Object.assign({}, state, { links: action.payload })
    default:
      return state
  }
}
