import React, { PropTypes as types } from 'react'
import Todo from './todo.jsx'

const TodoList = ({ todos, onTodoClick }) => {
  const todoFactory = todo => (
    <Todo
      key={todo.id}
      onClick={() => onTodoClick(todo.id)}
      {...todo}
    />
  )

  return (
    <ul>
      {todos.map(todoFactory)}
    </ul>
  )
}

TodoList.propTypes = {
  todos: types.array.isRequired,
  onTodoClick: types.func.isRequired,
}

export default TodoList
