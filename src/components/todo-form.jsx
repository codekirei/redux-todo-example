import React, { PropTypes as types } from 'react'

const TodoForm = ({ handleInput, handleSubmit, text }) => (
  <form onSubmit={e => handleSubmit(text, e)}>
    <input
      type="text"
      value={text}
      onInput={handleInput}
    />
    <button type="submit">Add Todo</button>
  </form>
)

TodoForm.propTypes = {
  handleInput: types.func.isRequired,
  handleSubmit: types.func.isRequired,
  text: types.string.isRequired,
}

export default TodoForm
