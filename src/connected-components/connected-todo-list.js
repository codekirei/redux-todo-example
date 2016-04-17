import { connect } from 'react-redux'
import TodoList from '../components/todo-list.jsx'
import { filterTodos } from '../connectors/todo-list-connectors'

export default connect(
  state => ({
    todos: filterTodos(state.todos, state.filter),
  })
)(TodoList)
