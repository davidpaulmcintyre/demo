import React from 'react'
import FormatLinks from 'components/FormatLinks/formatLinks'
import { shallow, render } from 'enzyme'

describe('(View) FormatLinks', () => {
  // let _wrapper

  beforeEach(() => {
    // phantomjs needs polyfills
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
      };
    }
  })

  it('Does not require props', () => {
    let _component = shallow(<FormatLinks />);
    expect(_component).to.exist;
  })

  it('Accepts plain text', () => {
    let _component = shallow(<FormatLinks text={'abc sdfd sfds ddd ddd '} />);
    expect(_component).to.exist;
  })

  it('Plain text results in single div', () => {
    let str = 'abc sdfd sfds ddd ddd ';
    let _component = render(<FormatLinks text={str} />);
    expect(_component).to.have.text(str);
  })

  it('Handles @username', () => {
    let _component = render(<FormatLinks text={'abc @defdsfsd ghi '} />);
    expect(_component).to.exist;
    expect(_component.find('a')).to.have.length(1);
  })

  it('Handles multiple @usernames', () => {
    let _component = render(<FormatLinks text={'abc @sdfd sfds @xyz ddd '} />);
    expect(_component).to.exist;
    expect(_component.find('a')).to.have.length(2);
    expect(_component.find('span')).to.have.length(3);
  })

  it('Properly trims username', () => {
    let _component = render(<FormatLinks text={'abc @foo. sfds ddd '} />);
    expect(_component).to.exist;
    expect(_component.find('a')).to.have.text('@foo');
  })
})
