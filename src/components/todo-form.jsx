import React, { PropTypes as types } from 'react'

const TodoForm = ({ handleSubmit }) => {
  let input
  const storeInput = node => { input = node }

  const onSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) return
    handleSubmit(input.value)
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input ref={storeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

TodoForm.propTypes = {
  handleSubmit: types.func.isRequired,
}

export default TodoForm
