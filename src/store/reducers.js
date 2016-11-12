import { combineReducers } from 'redux'
import issuesReducer from './issues'
import paginationReducer from './pagination'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    issues: issuesReducer,
    pagination: paginationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
