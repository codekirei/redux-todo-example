export const reducer = (state, type, handlers) =>
  handlers.hasOwnProperty(type)
    ? handlers[type]()
    : state
