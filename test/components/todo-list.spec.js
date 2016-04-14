// modules ---------------------------------------------------------------------

import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import nameOf from '../test-utils/name-of'
import TodoList from '../../src/components/todo-list.jsx'

// prep ------------------------------------------------------------------------

const defaultProps = {
  todos: [],
}

let defaultOutput

const render = shallowRender(TodoList, defaultProps)

// cases -----------------------------------------------------------------------

exports['<TodoList />'] = {

  before: () => {
    defaultOutput = render().output
  },

  'is <ul>': () => {
    expect(defaultOutput.type).to.equal('ul')
  },

  'contains todos': () => {
    const todos = []
    const firstTodo = { key: 1, text: 'foo' }
    const secondTodo = { key: 2, text: 'bar' }

    todos.push(firstTodo)
    const oneTodo = render({ todos }).output.props.children
    expect(oneTodo.length).to.equal(1)
    expect(oneTodo[0].props.text).to.equal(firstTodo.text)
    expect(nameOf(oneTodo[0])).to.equal('Todo')

    todos.push(secondTodo)
    const twoTodos = render({ todos }).output.props.children
    expect(twoTodos.length).to.equal(2)
  },

}
