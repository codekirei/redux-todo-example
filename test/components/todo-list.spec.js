// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import TodoList from '../../src/components/todo-list.jsx'

// modules - test utils --------------------------------------------------------

import shallowRender from '../test-utils/shallow-render'
import nameOf from '../test-utils/name-of'

// setup -----------------------------------------------------------------------

const defaultProps = {
  todos: [],
}

const render = shallowRender(TodoList, defaultProps)

let defaultOutput

// cases -----------------------------------------------------------------------

exports['COMPONENT: TodoList:'] = {

  before: () => {
    defaultOutput = render().output
  },

  'is <ul>': () => {
    equal(defaultOutput.type, 'ul')
  },

  'contains todos': () => {
    const firstTodo = { key: 1, text: 'foo' }
    const secondTodo = { key: 2, text: 'bar' }
    const oneTodo = render({ todos: [firstTodo] }).output.props.children
    const twoTodos = render({ todos: [firstTodo, secondTodo] }).output.props.children

    const cases = [
      {
        actual: oneTodo.length,
        expected: 1,
        message: 'oneTodo.length',
      },
      {
        actual: twoTodos.length,
        expected: 2,
        message: 'twoTodos.length',
      },
      {
        actual: oneTodo[0].props.text,
        expected: firstTodo.text,
        message: 'firstTodo.text',
      },
      {
        actual: twoTodos[1].props.text,
        expected: secondTodo.text,
        message: 'secondTodo.text',
      },
      {
        actual: nameOf(oneTodo[0]),
        expected: 'Todo',
        message: 'nameOf Todo',
      },
    ]

    cases.forEach(({ actual, expected, message }) => equal(actual, expected, message))
  },

}
