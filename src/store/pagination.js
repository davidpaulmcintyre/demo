export const RECEIVE_PAGINATION = 'RECEIVE_PAGINATION'

export function receivePagination (paging) {
  return {
    type    : RECEIVE_PAGINATION,
    payload : paging
  }
}

export const getIssues = ({ dispatch }) => {
  return (issues) => dispatch(receiveIssues(issues))
}

const initialState = {
  page: 1,
  size: 25
};
export default function paginationReducer (state = initialState, action) {
  return action.type === RECEIVE_PAGINATION
    ? action.payload
    : state
}
