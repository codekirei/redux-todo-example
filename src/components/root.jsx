import { createElement } from 'react'
import TodoForm from './connected/todo-form'
import TodoList from './connected/todo-list'
import Footer from './composed/footer.jsx'
import DevTools from './composed/devtools.jsx'

const root = (...children) => createElement('div', { className: 'react' }, ...children)

const children = [
  TodoForm,
  TodoList,
  Footer,
]

export const DevRoot = () =>
  root.apply(null, children.concat(DevTools).map(createElement))

export const ProductionRoot = () =>
  root.apply(null, children.map(createElement))
