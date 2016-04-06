const createReducer = (state, type, handlers) =>
  handlers.hasOwnProperty(type)
    ? handlers[type]()
    : state

export default createReducer
