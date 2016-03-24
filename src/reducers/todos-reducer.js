import { ADD_TODO, TOGGLE_TODO } from '../constants/action-constants'
import { createReducer } from '../utils'
import todoReducer from './todo-reducer'

const initialState = []

export default (state = initialState, action) =>
  createReducer(state, action.type, {
    [ADD_TODO]: () => [...state, todoReducer(null, action)],
    [TOGGLE_TODO]: () => state.map(todo => todoReducer(todo, action)),
  })
