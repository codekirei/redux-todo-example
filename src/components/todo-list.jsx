import React, { PropTypes as types } from 'react'
import Todo from './todo.jsx'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: types.array.isRequired,
  onTodoClick: types.func.isRequired,
}

export default TodoList
