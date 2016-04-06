import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import Todo from '../pure/todo.jsx'

export default connect(
  null,
  (dispatch, props) => ({
    handleClick: () => dispatch(toggleTodo(props.id)),
  })
)(Todo)
