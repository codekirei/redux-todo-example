import React, { PropTypes as types } from 'react'
import TodoContainer from '../containers/todo-container'

const TodoList = ({ todos }) => {
  const todo = todoProps => <TodoContainer {...todoProps} />
  return (
    <ul>
      {todos.map(todo)}
    </ul>
  )
}

TodoList.propTypes = {
  todos: types.array.isRequired,
}

export default TodoList
