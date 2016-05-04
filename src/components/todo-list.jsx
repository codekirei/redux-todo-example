import React, { PropTypes as types } from 'react'
import { v4 as uuid } from 'node-uuid'

import Todo from '../connected-components/connected-todo'

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(props => (<Todo key={uuid()} {...props} />))}
  </ul>
)

TodoList.propTypes = {
  todos: types.array.isRequired,
}

export default TodoList
