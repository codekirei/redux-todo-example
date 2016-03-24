import {
  ADD_TODO,
  SET_FILTER,
  TOGGLE_TODO,
} from '../constants/action-constants'

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  key: nextTodoId++,
  text,
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
})

export const toggleTodo = key => ({
  type: TOGGLE_TODO,
  key,
})
