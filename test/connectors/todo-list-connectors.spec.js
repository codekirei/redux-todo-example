import { expect } from 'chai'
import { filterTodos } from '../../src/connectors/todo-list-connectors'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../../src/constants/filter-constants'

const todos = [
  { id: 1, completed: true },
  { id: 2, completed: false },
]

exports.filterTodos = {

  [SHOW_ALL]: () => expect(filterTodos(todos, SHOW_ALL)).to.deep.equal(todos),

  [SHOW_COMPLETED]: () => expect(filterTodos(todos, SHOW_COMPLETED)).to.deep.equal([
    { id: 1, completed: true },
  ]),

  [SHOW_ACTIVE]: () => expect(filterTodos(todos, SHOW_ACTIVE)).to.deep.equal([
    { id: 2, completed: false },
  ]),

}
