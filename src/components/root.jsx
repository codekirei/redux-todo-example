import React from 'react'
import Footer from './footer.jsx'
import AddTodo from '../containers/add-todo.jsx'
import TodoListContainer from '../containers/todo-list-container'

const Root = () => (
  <div className="react">
    <AddTodo />
    <TodoListContainer />
    <Footer />
  </div>
)

export default Root
