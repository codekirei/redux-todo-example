import { expect } from 'chai'
import todosReducer from '../../src/reducers/todos-reducer'
import {
  addTodo,
  toggleTodo,
} from '../../src/actions'

exports['todos-reducer'] = {
  addTodo: () => {
    const todos = []
    const result = todosReducer(todos, addTodo('foo'))
    expect(todos.length).to.equal(0)
    expect(result.length).to.equal(1)
  },
  toggleTodo: () => {
    const todos = [
      { id: 1, completed: true },
      { id: 2, completed: false },
    ]
    expect(todosReducer(todos, toggleTodo(1))).to.deep.equal([
      { id: 1, completed: false },
      { id: 2, completed: false },
    ])
    expect(todosReducer(todos, toggleTodo(2))).to.deep.equal([
      { id: 1, completed: true },
      { id: 2, completed: true },
    ])
  },
}
