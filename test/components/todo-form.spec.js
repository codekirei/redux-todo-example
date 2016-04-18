// modules - node --------------------------------------------------------------

import { equal, ok } from 'assert'

// modules - npm ---------------------------------------------------------------

import sinon from 'sinon'

// modules - local -------------------------------------------------------------

import TodoForm from '../../src/components/todo-form.jsx'

// modules - test utils --------------------------------------------------------

import shallowRender from '../test-utils/shallow-render'

// setup -----------------------------------------------------------------------

const defaultProps = {
  handleSubmit: () => {},
  handleInput: () => {},
  text: '',
}

const render = shallowRender(TodoForm, defaultProps)

let defaultOutput

// cases -----------------------------------------------------------------------

exports['COMPONENT: TodoForm:'] = {

  before: () => {
    defaultOutput = render().output
  },

  'renders tree': () => {
    equal(defaultOutput.type, 'form')

    const [input, button] = defaultOutput.props.children

    const childCases = [
      // input
      ['input.type', input.type, 'input'],
      ['input.props.type', input.props.type, 'text'],
      ['input.props.value', input.props.value, ''],
      // button
      ['button.type', button.type, 'button'],
      ['button.props.type', button.props.type, 'submit'],
      ['button.props.children', button.props.children, 'Add Todo'],
    ]

    childCases.forEach(([m, a, e]) => equal(a, e, m))
  },

  'calls props.handleSubmit with props.text': () => {
    const spy = sinon.spy()
    const text = 'foo'
    const { output } = render({ text, handleSubmit: spy })
    output.props.onSubmit()
    ok(spy.calledWith(text))
  },

  'calls props.handleInput on input onChange event': () => {
    const spy = sinon.spy()
    const { output } = render({ handleInput: spy })
    const [input] = output.props.children
    input.props.onChange()
    ok(spy.called)
  },

}
