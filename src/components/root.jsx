import React from 'react'
import TodoFormContainer from '../containers/todo-form-container'
import TodoListContainer from '../containers/todo-list-container'
import Footer from './footer.jsx'
import DevTools from './devtools.jsx'

const DevRoot = () => (
  <div className="react">
    <TodoFormContainer />
    <TodoListContainer />
    <Footer />
    <DevTools />
  </div>
)

const ProductionRoot = () => (
  <div className="react">
    <TodoFormContainer />
    <TodoListContainer />
    <Footer />
  </div>
)

if (process.env.NODE_ENV === 'production') {
  module.exports = ProductionRoot
} else {
  module.exports = DevRoot
}
