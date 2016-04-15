import { SET_INPUT } from '../../src/constants/action-constants'
import { setInput } from '../../src/actions'
import { expect } from 'chai'

const text = 'foo'
let action

exports['action: setInput'] = {

  before: () => {
    action = setInput(text)
  },

  type: () => expect(action.type).to.equal(SET_INPUT),
  text: () => expect(action.text).to.equal(text),

}
