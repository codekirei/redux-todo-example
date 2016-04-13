import {
  ADD_TODO,
  SET_FILTER,
  SET_INPUT,
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

export const setInput = text => ({
  type: SET_INPUT,
  text,
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
})
