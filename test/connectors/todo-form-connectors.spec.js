import { expect } from 'chai'
import { spy } from 'sinon'
import { submitHandler } from '../../src/connectors/todo-form-connectors'
import { addTodo } from '../../src/actions'

exports.submitHandler = {

  'prevents default event': () => {
    const dispatch = () => {}
    const text = 'foo'
    const e = { preventDefault: spy() }
    submitHandler(dispatch)(text, e)
    expect(e.preventDefault.called).to.equal(true)
  },

  'dispatches addTodo when there is text': () => {
    const dispatch = spy()
    const text = 'foo'
    const e = { preventDefault: () => {} }
    submitHandler(dispatch)(text, e)
    expect(dispatch.called).to.equal(true)
    const args = dispatch.args[0][0]
    expect(args.type).to.equal(addTodo().type)
    expect(args.text).to.equal(text)
  },

  'does not dispatch when there is no text': () => {
    const dispatch = spy()
    const text = ''
    const e = { preventDefault: () => {} }
    submitHandler(dispatch)(text, e)
    expect(dispatch.called).to.equal(false)
  },

}
