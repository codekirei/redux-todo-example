import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm from '../components/todo-form.jsx'

export default connect(
  null,
  dispatch => ({
    handleSubmit: value => dispatch(addTodo(value)),
  })
)(TodoForm)
