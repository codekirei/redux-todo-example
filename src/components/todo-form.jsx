import React, { PropTypes as types } from 'react'

const TodoForm = ({ handleSubmit, handleInput, text }) => (
  <form onSubmit={e => handleSubmit(text, e)}>
    <input
      type="text"
      value={text}
      onChange={handleInput}
    />
    <button type="submit">Add Todo</button>
  </form>
)

TodoForm.propTypes = {
  handleSubmit: types.func.isRequired,
  handleInput: types.func.isRequired,
  text: types.string.isRequired,
}

export default TodoForm
