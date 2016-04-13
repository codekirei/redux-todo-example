import { connect } from 'react-redux'
import {
  addTodo,
  setInput,
} from '../actions'
import TodoForm from '../components/todo-form.jsx'

export default connect(
  state => ({
    text: state.input,
  }),
  dispatch => ({
    handleSubmit: text => e => {
      e.preventDefault()
      if (text.trim()) dispatch(addTodo(text))
    },
    handleInput: ({ target }) => dispatch(setInput(target.value)),
  })
)(TodoForm)
