import React, { PropTypes as types } from 'react'
import Todo from '../connectors/todo-connector'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(props => (<Todo {...props} />))}
  </ul>
)

TodoList.propTypes = {
  todos: types.array.isRequired,
}

export default TodoList
