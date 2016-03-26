import { TOGGLE_TODO } from '../../src/constants/action-constants'
import { toggleTodo } from '../../src/actions'
import { expect } from 'chai'

const id = 'foo'
const action = toggleTodo(id)

exports.toggleTodo = {
  type: () => expect(action.type).to.equal(TOGGLE_TODO),
  id: () => expect(action.id).to.equal(id),
}
