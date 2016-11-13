import DetailsContainer from './containers/DetailsContainer'

export default (store) => ({
  path : ':id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, DetailsContainer)
    }, 'details')
  }
})

