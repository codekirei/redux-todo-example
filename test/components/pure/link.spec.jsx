//------------------------------------------------------------------------------
// modules
//------------------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Link from '../../../src/components/pure/link.jsx'
import assignProps from '../../test-utils/assign-props'

//------------------------------------------------------------------------------
// prep
//------------------------------------------------------------------------------

let defaultOutput

const defaultProps = {
  active: false,
  clickHandler: () => {},
  text: 'foo',
}

const props = assignProps(defaultProps)

//------------------------------------------------------------------------------
// cases
//------------------------------------------------------------------------------

exports['<Link />'] = {

  before: () => { defaultOutput = shallow(<Link {...props()} />) },

  'is <a> if props.active === false': () => expect(defaultOutput).to.have.tagName('a'),

  'is <span> if props.active === true': () => {
    const output = shallow(<Link {...props({ active: true })} />)
    expect(output).to.have.tagName('span')
  },

  'receives props.text': () => expect(defaultOutput).to.have.text(defaultProps.text),

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const output = shallow(<Link {...props({ clickHandler: spy })} />)
    output.find('a').simulate('click')
    expect(spy.called).to.equal(true)
  },

}
