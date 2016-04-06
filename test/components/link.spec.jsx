import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Link from '../../src/components/pure/link.jsx'

const defaultProps = {
  active: false,
  clickHandler: () => {},
  text: 'foo',
}

const props = override => Object.assign({}, defaultProps, override)

exports['<Link />'] = {

  'is <span> if props.active === true': () => {
    const output = shallow(<Link {...props({ active: true })} />)
    expect(output).to.have.tagName('span')
  },

  'is <a> if props.active === false': () => {
    const output = shallow(<Link {...props()} />)
    expect(output).to.have.tagName('a')
  },

  'receive props.text': () => {
    const output = shallow(<Link {...props()} />)
    expect(output).to.have.text(defaultProps.text)
  },

  'handle clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const output = mount(<Link {...props({ clickHandler: spy })} />)
    output.find('a').simulate('click')
    expect(spy.called).to.equal(true)
  },

}
