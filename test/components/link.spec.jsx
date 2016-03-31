import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import Link from '../../src/components/link.jsx'

const defaultProps = {
  active: false,
  clickHandler: () => {},
  text: 'foo',
}

const props = override => Object.assign({}, defaultProps, override)

exports['<Link />'] = {

  'is <span> if props.active === true': () => {
    const output = shallow(<Link {...props({ active: true })} />)
    expect(output.type()).to.equal('span')
  },

  'is <a> if props.active === false': () => {
    const output = shallow(<Link {...props()} />)
    expect(output.type()).to.equal('a')
  },

  'receive props.text': () => {
    const output = shallow(<Link {...props()} />)
    expect(output.props().children).to.equal(defaultProps.text)
  },

  'handle clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const output = mount(<Link {...props({ clickHandler: spy })} />)
    output.find('a').simulate('click')
    expect(spy.called).to.equal(true)
  },

}
