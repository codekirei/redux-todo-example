// modules ---------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import TodoForm from '../../src/components/todo-form.jsx'

// prep ------------------------------------------------------------------------

const defaultProps = {
  handleSubmit: () => {},
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

  'renders static markup': () => {
    expect(defaultOutput.type).to.equal('form')

    const [input, button] = defaultOutput.props.children

    expect(input.type).to.equal('input')

    expect(button.type).to.equal('button')
    expect(button.props.type).to.equal('submit')
    expect(button.props.children).to.equal('Add Todo')
  },

  'does not fire props.handleSubmit if input is blank': () => {
    const spy = sinon.spy()
    const { output } = render({ handleSubmit: spy })
    output.props.onSubmit({ preventDefault() {} })
    expect(spy.called).to.equal(false)
    // const form = findTag(output, 'form')
    // console.log(form)
    // output.find('form').simulate('submit')
    // expect(spy.called).to.equal(false)
  },

  // 'does not fire props.handleSubmit if input is only whitespace': () => {
  //   const { spy, output } = render()
  //   output.find('input').get(0).value = '  '
  //   output.find('form').simulate('submit')
  //   expect(spy.called).to.equal(false)
  // },

  // 'fires props.handleSubmit if there is text in input': () => {
  //   const { spy, output } = render()
  //   const text = 'foo'
  //   output.find('input').get(0).value = text
  //   output.find('form').simulate('submit')
  //   expect(spy.calledWith(text)).to.equal(true)
  // },

  // 'clears input after submission': () => {
  //   const { output } = render()
  //   const input = output.find('input').get(0)
  //   input.value = 'foo'
  //   output.find('form').simulate('submit')
  //   expect(input.value).to.equal('')
  // },

}
