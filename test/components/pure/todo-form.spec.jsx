//------------------------------------------------------------------------------
// modules
//------------------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import TodoForm from '../../../src/components/pure/todo-form.jsx'

//------------------------------------------------------------------------------
// prep
//------------------------------------------------------------------------------

const render = () => {
  const spy = sinon.spy()
  const output = mount(<TodoForm handleSubmit={spy} />)
  return { spy, output }
}

//------------------------------------------------------------------------------
// cases
//------------------------------------------------------------------------------

exports['<TodoForm />'] = {

  'does not fire props.handleSubmit if input is blank': () => {
    const { spy, output } = render()
    output.find('form').simulate('submit')
    expect(spy.called).to.equal(false)
  },

  'does not fire props.handleSubmit if input is only whitespace': () => {
    const { spy, output } = render()
    output.find('input').get(0).value = '  '
    output.find('form').simulate('submit')
    expect(spy.called).to.equal(false)
  },

  'fires props.handleSubmit if there is text in input': () => {
    const { spy, output } = render()
    const text = 'foo'
    output.find('input').get(0).value = text
    output.find('form').simulate('submit')
    expect(spy.calledWith(text)).to.equal(true)
  },

  'clears input after submission': () => {
    const { output } = render()
    const input = output.find('input').get(0)
    input.value = 'foo'
    output.find('form').simulate('submit')
    expect(input.value).to.equal('')
  },

}
