import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Todo from '../components/todo.jsx'

export default connect(
  null,
  (dispatch, { id }) => ({
    handleClick: () => dispatch(toggleTodo(id)),
    handleKeyPress: ({ key }) => { if (key === 'Enter') dispatch(toggleTodo(id)) },
  })
)(Todo)
