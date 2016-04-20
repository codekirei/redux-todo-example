// modules - node --------------------------------------------------------------

import { equal, ok } from 'assert'

// modules - npm ---------------------------------------------------------------

import sinon from 'sinon'

// modules - local -------------------------------------------------------------

import Link from '../../src/components/link.jsx'

// modules - test utils --------------------------------------------------------

import shallowRender from '../test-utils/shallow-render'

// setup -----------------------------------------------------------------------

const defaultProps = {
  active: false,
  clickHandler: () => {},
  text: 'foo',
}

const render = shallowRender(Link, defaultProps)

let defaultOutput

// cases -----------------------------------------------------------------------

exports['COMPONENT: Link:'] = {

  'before': () => {
    defaultOutput = render().output
  },

  'is <a> if props.active === false': () => {
    equal(defaultOutput.type, 'a')
  },

  'is <span> if props.active === true': () => {
    const { output } = render({ active: true })
    equal(output.type, 'span')
  },

  'receives props.text': () => {
    equal(defaultOutput.props.children, defaultProps.text)
  },

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const { output } = render({ clickHandler: spy })
    output.props.onClick()
    ok(spy.called)
  },

}
