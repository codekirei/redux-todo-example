import React, { PropTypes as types } from 'react'

const Todo = ({
  completed,
  handleClick,
  handleKeyPress,
  text,
}) => (
  <li
    className={completed ? 'todo--completed' : ''}
    onClick={handleClick}
    onKeyPress={handleKeyPress}
    role='listitem'
    tabIndex='0'
  >
    {text}
  </li>
)

Todo.propTypes = {
  completed: types.bool.isRequired,
  handleClick: types.func.isRequired,
  handleKeyPress: types.func.isRequired,
  text: types.string.isRequired,
}

export default Todo
