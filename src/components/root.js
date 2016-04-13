import { createElement } from 'react'
import TodoForm from '../connectors/todo-form-connector'
import TodoList from '../connectors/todo-list-connector'
import Footer from './footer.jsx'
import DevTools from './devtools.jsx'

const root = (...children) => createElement('div', { className: 'react' }, ...children)

const children = [
  TodoForm,
  TodoList,
  Footer,
]

export const DevRoot = () =>
  root.apply(null, children.concat(DevTools).map(createElement))

export const ProdRoot = () =>
  root.apply(null, children.map(createElement))
