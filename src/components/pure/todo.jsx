import React, { PropTypes as types } from 'react'

const Todo = ({ clickHandler, completed, text }) => (
  <li
    className={completed ? 'todo--completed' : ''}
    onClick={clickHandler}
  >
    {text}
  </li>
)

Todo.propTypes = {
  clickHandler: types.func.isRequired,
  completed: types.bool.isRequired,
  text: types.string.isRequired,
}

export default Todo
