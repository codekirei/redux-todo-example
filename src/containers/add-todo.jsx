import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  const onSubmit = e => {
    e.preventDefault()
    if (!input.value.trim()) return
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input ref={text => { input = text }} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
