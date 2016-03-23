import React from 'react'
import Footer from './footer.jsx'
import AddTodo from '../containers/add-todo.jsx'
import VisibleTodoList from '../containers/visible-todo-list'

const Root = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Root
