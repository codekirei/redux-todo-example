import { connect } from 'react-redux'
import filterTodos from '../../utils/filter-todos'
import TodoList from '../composed/todo-list.jsx'

export default connect(
  state => ({
    todos: filterTodos(state.todos, state.filter),
  })
)(TodoList)
