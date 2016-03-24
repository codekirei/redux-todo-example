import React, { PropTypes as types } from 'react'

const Todo = ({ handleClick, completed, text }) => {
  const textDecoration = completed ? 'line-through' : 'none'
  return (
    <li
      onClick={handleClick}
      style={{ textDecoration }}
    >
      {text}
    </li>
  )
}

Todo.propTypes = {
  handleClick: types.func.isRequired,
  completed: types.bool.isRequired,
  text: types.string.isRequired,
}

export default Todo
