import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  const storeInput = text => { input = text }

  const onSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) return
    dispatch(addTodo(input.value))
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

export default connect()(AddTodo)
