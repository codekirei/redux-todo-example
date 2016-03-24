import { connect } from 'react-redux'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from '../constants/filter-constants'
import TodoList from '../components/todo-list.jsx'

const filterTodos = (todos, filter) => ({
  [SHOW_ALL]: todos,
  [SHOW_COMPLETED]: todos.filter(todo => todo.completed),
  [SHOW_ACTIVE]: todos.filter(todo => !todo.completed),
})[filter]

export default connect(
  state => ({
    todos: filterTodos(state.todos, state.filter),
  })
)(TodoList)
