// modules - node --------------------------------------------------------------

import { equal, ok } from 'assert'

// modules - npm ---------------------------------------------------------------

import sinon from 'sinon'

// modules - local -------------------------------------------------------------

import Todo from '../../src/components/todo.jsx'

// modules - test utils --------------------------------------------------------

import shallowRender from '../test-utils/shallow-render'

// setup -----------------------------------------------------------------------

const defaultProps = {
  completed: false,
  clickHandler: () => {},
  text: 'foo',
}

const render = shallowRender(Todo, defaultProps)

let defaultOutput

// cases -----------------------------------------------------------------------

exports['COMPONENT: Todo:'] = {

  'before': () => {
    defaultOutput = render().output
  },

  'is <li>': () => {
    equal(defaultOutput.type, 'li')
  },

  'receives props.text': () => {
    equal(defaultOutput.props.children, defaultProps.text)
  },

  'has no className when not completed': () => {
    equal(defaultOutput.props.className, '')
  },

  'has className todo--completed when completed': () => {
    const { output } = render({ completed: true })
    equal(output.props.className, 'todo--completed')
  },

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const { output } = render({ clickHandler: spy })
    output.props.onClick()
    ok(spy.called)
  },

}
