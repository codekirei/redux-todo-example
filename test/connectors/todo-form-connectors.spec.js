// modules - node --------------------------------------------------------------

import { equal, ok } from 'assert'

// modules - npm ---------------------------------------------------------------

import { spy } from 'sinon'

// modules - local -------------------------------------------------------------

import { addTodo } from '../../src/actions'
import { submitHandler } from '../../src/connectors/todo-form-connectors'

// setup -----------------------------------------------------------------------

const defaultSubmitHandlerArgs = {
  dispatch: () => {},
  text: '',
  event: { preventDefault: () => {} },
}

const testSubmitHandler = overrides => {
  const { dispatch, text, event } = Object.assign({}, defaultSubmitHandlerArgs, overrides)
  submitHandler(dispatch)(text, event)
}

// cases -----------------------------------------------------------------------

exports['CONNECTOR: TodoFormConnectors:'] = {

  submitHandler: {

    'prevents default event': () => {
      const args = {
        event: { preventDefault: spy() },
      }
      testSubmitHandler(args)
      ok(args.event.preventDefault.called)
    },

    'dispatches addTodo when there is text': () => {
      const args = {
        dispatch: spy(),
        text: 'foo',
      }
      testSubmitHandler(args)
      ok(args.dispatch.called)
      const { type, text } = args.dispatch.args[0][0]
      equal(type, addTodo().type)
      equal(text, args.text)
    },

    'does not dispatch when there is no text': () => {
      const args = {
        dispatch: spy(),
      }
      testSubmitHandler(args)
      equal(args.dispatch.called, false)
    },

  },

}
