//------------------------------------------------------------------------------
// modules
//------------------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import Todo from '../../../src/components/pure/todo.jsx'
import assignProps from '../../test-utils/assign-props'

//------------------------------------------------------------------------------
// prep
//------------------------------------------------------------------------------

let defaultOutput

const defaultProps = {
  completed: false,
  clickHandler: () => {},
  text: 'foo',
}

const props = assignProps(defaultProps)

//------------------------------------------------------------------------------
// cases
//------------------------------------------------------------------------------

exports['<Todo />'] = {

  before: () => { defaultOutput = shallow(<Todo {...props()} />) },

  'is <li>': () => expect(defaultOutput).to.have.tagName('li'),

  'receives props.text': () => expect(defaultOutput).to.have.text(defaultProps.text),

  'has no className when not completed': () => expect(defaultOutput).to.have.className(''),

  'has className todo--completed when completed': () => {
    const output = shallow(<Todo {...props({ completed: true })} />)
    expect(output).to.have.className('todo--completed')
  },

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const output = shallow(<Todo {...props({ clickHandler: spy })} />)
    output.find('li').simulate('click')
    expect(spy.called).to.equal(true)
  },
}
