import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Todo from '../components/todo.jsx'

export default connect(
  null,
  (dispatch, props) => ({
    handleClick: () => dispatch(toggleTodo(props.id)),
  })
)(Todo)
