// modules ---------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import TodoForm from '../../src/components/todo-form.jsx'

// prep ------------------------------------------------------------------------

const defaultProps = {
  handleSubmit: () => {},
  handleInput: () => {},
  text: '',
}

let defaultOutput

const render = overrides => {
  const props = Object.assign({}, defaultProps, overrides)
  const output = shallowRender(<TodoForm {...props} />)
  return { props, output }
}

// cases -----------------------------------------------------------------------

exports['<TodoForm />'] = {

  before: () => {
    defaultOutput = render().output
  },

  'renders tree': () => {
    expect(defaultOutput.type).to.equal('form')

    const [input, button] = defaultOutput.props.children

    expect(input.type).to.equal('input')
    expect(input.props.type).to.equal('text')
    expect(input.props.value).to.equal('')

    expect(button.type).to.equal('button')
    expect(button.props.type).to.equal('submit')
    expect(button.props.children).to.equal('Add Todo')
  },

  'calls props.handleSubmit with props.text': () => {
    const spy = sinon.spy()
    const text = 'foo'
    const { output } = render({ text, handleSubmit: spy })
    output.props.onSubmit()
    expect(spy.calledWith(text)).to.equal(true)
  },

  'calls props.handleInput on change': () => {
    expect(true).to.equal(false)
  },

}
