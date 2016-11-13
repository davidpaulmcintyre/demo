import React from 'react'
import FormatLinks from 'components/FormatLinks/formatLinks'
import { shallow, render } from 'enzyme'

describe('(View) FormatLinks', () => {
  // let _wrapper

  beforeEach(() => {
    // phantomjs needs polyfills
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(searchString, position){
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
      };
    }

    // if (!Array.prototype.find) {
    //   Object.defineProperty(Array.prototype, 'find', {
    //     value: function(predicate) {
    //     'use strict';
    //     if (this == null) {
    //       throw new TypeError('Array.prototype.find called on null or undefined');
    //     }
    //     if (typeof predicate !== 'function') {
    //       throw new TypeError('predicate must be a function');
    //     }
    //     var list = Object(this);
    //     var length = list.length >>> 0;
    //     var thisArg = arguments[1];
    //     var value;

    //     for (var i = 0; i < length; i++) {
    //       value = list[i];
    //       if (predicate.call(thisArg, value, i, list)) {
    //         return value;
    //       }
    //     }
    //     return undefined;
    //     }
    //   });
    // }

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
