import { connect } from 'react-redux'
import { setInput } from '../actions'
import TodoForm from '../components/todo-form.jsx'
import { submitHandler } from '../connectors/todo-form-connectors'

export default connect(
  state => ({
    text: state.input,
  }),
  dispatch => ({
    handleSubmit: submitHandler(dispatch),
    handleInput: ({ target }) => dispatch(setInput(target.value)),
  })
)(TodoForm)
