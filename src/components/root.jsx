import React from 'react'
import Footer from './footer.jsx'
import AddTodo from '../containers/add-todo.jsx'
import TodoListContainer from '../containers/todo-list-container'

const Root = () => (
  <div>
    <AddTodo />
    <TodoListContainer />
    <Footer />
  </div>
)

export default Root
