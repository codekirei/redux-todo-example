import React from 'react'
import TodoFormContainer from '../containers/todo-form-container'
import TodoListContainer from '../containers/todo-list-container'
import Footer from './footer.jsx'
import DevTools from './devtools.jsx'

export const DevRoot = () => (
  <div className="react">
    <TodoFormContainer />
    <TodoListContainer />
    <Footer />
    <DevTools />
  </div>
)

export const ProductionRoot = () => (
  <div className="react">
    <TodoFormContainer />
    <TodoListContainer />
    <Footer />
  </div>
)
