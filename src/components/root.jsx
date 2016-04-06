import React from 'react'
import TodoForm from './connected/todo-form'
import TodoList from './connected/todo-list'
import Footer from './composed/footer.jsx'
import DevTools from './composed/devtools.jsx'

export const DevRoot = () => (
  <div>
    <TodoForm />
    <TodoList />
    <Footer />
    <DevTools />
  </div>
)

export const ProductionRoot = () => (
  <div>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
)
