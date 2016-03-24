import {
  ADD_TODO,
  SET_FILTER,
  TOGGLE_TODO,
} from '../constants/action-constants'
import { v4 as uuid } from 'node-uuid'

export const addTodo = text => ({
  type: ADD_TODO,
  id: uuid(),
  text,
})

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})
