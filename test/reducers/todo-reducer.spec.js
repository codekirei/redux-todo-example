// modules
//----------------------------------------------------------
import { expect } from 'chai'
import todoReducer from '../../src/reducers/todo-reducer'
import {
  addTodo,
  toggleTodo,
} from '../../src/actions'

// fixtures
//----------------------------------------------------------
let addedTodo
const text = 'foo'
const todos = {
  differentId: {
    id: 1,
    completed: false,
  },
  completed: {
    id: 2,
    completed: true,
  },
  notCompleted: {
    id: 2,
    completed: false,
  },
}
const toggleTodoCase = todo => todoReducer(todos[todo], toggleTodo(2))

// cases
//----------------------------------------------------------
exports['todo-reducer'] = {

  addTodo: {
    before: () => { addedTodo = todoReducer(null, addTodo(text)) },
    id: () => expect(addedTodo.id).to.be.a('string'),
    key: () => expect(addedTodo.key).to.deep.equal(addedTodo.id),
    text: () => expect(addedTodo.text).to.equal(text),
    completed: () => expect(addedTodo.completed).to.be.false,
  },

  toggleTodo: {
    differentId: () =>
      expect(toggleTodoCase('differentId'))
        .to.deep.equal(todos.differentId),
    completed: () =>
      expect(toggleTodoCase('completed'))
        .to.deep.equal(todos.notCompleted),
    notCompleted: () =>
      expect(toggleTodoCase('notCompleted'))
        .to.deep.equal(todos.completed),
  },

}
