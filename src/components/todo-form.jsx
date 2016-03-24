import React, { PropTypes as types } from 'react'

const TodoForm = ({ submitHandler }) => {
  let input
  const storeInput = node => { input = node }

  const onSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) return
    submitHandler(input.value)
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
  submitHandler: types.func.isRequired,
}

export default TodoForm
