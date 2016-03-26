import { ADD_TODO } from '../../src/constants/action-constants'
import { addTodo } from '../../src/actions'
import { expect } from 'chai'

const text = 'foo'
const action = addTodo(text)

exports.addTodo = {
  type: () => expect(action.type).to.equal(ADD_TODO),
  id: () => expect(action.id).to.be.a('string'),
  text: () => expect(action.text).to.equal(text),
}
