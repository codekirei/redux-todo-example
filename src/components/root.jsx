import React from 'react'
import TodoForm from '../connected-components/connected-todo-form'
import TodoList from '../connected-components/connected-todo-list'
import Footer from './footer.jsx'
import DevTools from './devtools.jsx'

export const DevRoot = () => (
  <div className='react'>
    <TodoForm />
    <TodoList />
    <Footer />
    <DevTools />
  </div>
)

export const ProdRoot = () => (
  <div className='react'>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
)
