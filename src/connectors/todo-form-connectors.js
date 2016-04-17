import { addTodo } from '../actions'

export const submitHandler = dispatch => (text, e) => {
  e.preventDefault()
  if (text.trim()) dispatch(addTodo(text))
}
