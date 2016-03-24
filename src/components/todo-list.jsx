import React, { PropTypes as types } from 'react'
import Todo from './todo.jsx'

const TodoList = ({ todos, onTodoClick }) => {
  const todo = todoProps => (
    <Todo
      onClick={() => onTodoClick(todoProps.key)}
      {...todoProps}
    />
  )

  return (
    <ul>
      {todos.map(todo)}
    </ul>
  )
}

TodoList.propTypes = {
  todos: types.array.isRequired,
  onTodoClick: types.func.isRequired,
}

export default TodoList
