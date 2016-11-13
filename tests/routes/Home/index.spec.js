import HomeRoute from 'routes/Home'
import { connect } from 'react-redux'
import { shallow } from 'enzyme'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    // _component = new HomeRoute.component()
    _component = shallow(HomeRoute.component)
  })

  // it('Should return a route configuration object', () => {
  //   expect(typeof HomeRoute).to.equal('object')
  // })

  it('Should define a route component', () => {
    // todo: fails due to HOC wrapper?
    // console.log(_component.debug());
    expect(_component.type).to.equal('Connect')
  })
})
