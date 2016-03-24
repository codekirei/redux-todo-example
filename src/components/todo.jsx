import React, { PropTypes as types } from 'react'

const Todo = ({ handleClick, completed, text }) => (
  <li
    className={completed ? 'todo--completed' : ''}
    onClick={handleClick}
  >
    {text}
  </li>
)

Todo.propTypes = {
  handleClick: types.func.isRequired,
  completed: types.bool.isRequired,
  text: types.string.isRequired,
}

export default Todo
