import React, { PropTypes as types } from 'react'

const Todo = ({ onClick, completed, text }) => {
  const textDecoration = completed ? 'line-through' : 'none'

  return (
    <li
      onClick={onClick}
      style={{ textDecoration }}
    >
      {text}
    </li>
  )
}

Todo.propTypes = {
  onClick: types.func.isRequired,
  completed: types.bool.isRequired,
  text: types.string.isRequired,
}

export default Todo
