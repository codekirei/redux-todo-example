// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import TodoList from '../../src/components/todo-list.jsx'

// modules - test utils --------------------------------------------------------

import multiEqual from '../test-utils/multi-equal'
import nameOf from '../test-utils/name-of'
import shallowRender from '../test-utils/shallow-render'

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

    multiEqual([
      ['oneTodo length', oneTodo.length, 1],
      ['twoTodos length', twoTodos.length, 2],
      ['firstTodo text', oneTodo[0].props.text, firstTodo.text],
      ['secondTodo text', twoTodos[1].props.text, secondTodo.text],
      ['children are Todo components', nameOf(oneTodo[0]), 'Todo'],
    ])
  },

}
