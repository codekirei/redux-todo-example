import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoForm from '../components/todo-form.jsx'

export default connect(
  null,
  dispatch => ({
    submitHandler: value => dispatch(addTodo(value)),
  })
)(TodoForm)
