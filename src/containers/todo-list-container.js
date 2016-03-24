import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filters'
import TodoList from '../components/todo-list.jsx'

const getVisibleTodos = (todos, filter) => ({
  [SHOW_ALL]: todos,
  [SHOW_COMPLETED]: todos.filter(todo => todo.completed),
  [SHOW_ACTIVE]: todos.filter(todo => !todo.completed),
})[filter]

export default connect(
  state => ({
    todos: getVisibleTodos(state.todos, state.filter),
  }),
  dispatch => ({
    onTodoClick: key => dispatch(toggleTodo(key)),
  })
)(TodoList)
