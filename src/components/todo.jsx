import React, { PropTypes as types } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: types.func.isRequired,
  completed: types.bool.isRequired,
  text: types.string.isRequired,
}

export default Todo
