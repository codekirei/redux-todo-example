// modules ---------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import Todo from '../../src/components/todo.jsx'

// prep ------------------------------------------------------------------------

const defaultProps = {
  completed: false,
  clickHandler: () => {},
  text: 'foo',
}

let defaultOutput

const render = overrides => {
  const props = Object.assign({}, defaultProps, overrides)
  const output = shallowRender(<Todo {...props} />)
  return { props, output }
}

// cases -----------------------------------------------------------------------

exports['<Todo />'] = {

  before: () => {
    defaultOutput = render().output
  },

  'is <li>': () => {
    expect(defaultOutput.type).to.equal('li')
  },

  'receives props.text': () => {
    expect(defaultOutput.props.children).to.equal(defaultProps.text)
  },

  'has no className when not completed': () => {
    expect(defaultOutput.props.className).to.equal('')
  },

  'has className todo--completed when completed': () => {
    const { output } = render({ completed: true })
    expect(output.props.className).to.equal('todo--completed')
  },

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const { output } = render({ clickHandler: spy })
    output.props.onClick()
    expect(spy.called).to.equal(true)
  },

}
