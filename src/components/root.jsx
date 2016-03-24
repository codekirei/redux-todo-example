import React from 'react'
import TodoFormContainer from '../containers/todo-form-container'
import Footer from './footer.jsx'
import TodoListContainer from '../containers/todo-list-container'

const Root = () => (
  <div className="react">
    <TodoFormContainer />
    <TodoListContainer />
    <Footer />
  </div>
)

export default Root
