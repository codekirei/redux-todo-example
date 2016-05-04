import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/action-constants'

export const initialState = []

export default (todos = initialState, { type, id, text }) => {
  switch (type) {
    case ADD_TODO:
      return todos.concat({
        id,
        text,
        completed: false,
      })
    case TOGGLE_TODO:
      return todos.map(todo => (
        todo.id !== id
          ? todo
          : Object.assign({}, todo, { completed: !todo.completed })
      ))
    default:
      return todos
  }
}
