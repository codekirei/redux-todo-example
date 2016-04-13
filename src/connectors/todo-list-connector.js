import { connect } from 'react-redux'
import { filterTodos } from '.'
import TodoList from '../components/todo-list.jsx'

export default connect(
  state => ({
    todos: filterTodos(state.todos, state.filter),
  })
)(TodoList)
