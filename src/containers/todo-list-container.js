import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/filters'
import TodoList from '../components/todo-list.jsx'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {

    case SHOW_ALL:
      return todos

    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)

    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)

    default:
      return todos
  }
}

export default connect(
  state => ({
    todos: getVisibleTodos(state.todos, state.filter),
  }),
  dispatch => ({
    onTodoClick: id => dispatch(toggleTodo(id)),
  })
)(TodoList)
