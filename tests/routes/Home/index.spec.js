import HomeRoute from 'routes/Home'
import { shallow } from 'enzyme'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = shallow(HomeRoute.component)
  })

  it('Should define a route component', () => {
    // todo: fails due to HOC wrapper?
    expect(_component.type).to.equal('Connect')
  })
})
