import {
  default as createStore
} from 'store/createStore'

describe('(Store) createStore', () => {
  let store

  before(() => {
    store = createStore()
  })

  it('should have an empty asyncReducers object', () => {
    expect(store.asyncReducers).to.be.an('object')
    expect(store.asyncReducers).to.be.empty
  })

  describe('(Issues reducer)', () => {
    it('store should be initialized with Issues state', () => {
      const issues = [ { id: 1, username: 'foo' }];
      store.dispatch({
        type    : 'RECEIVE_ISSUES',
        payload : issues
      })
      expect(store.getState().issues.issues).to.deep.equal(issues)
    })
  })
})
