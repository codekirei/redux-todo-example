// modules ---------------------------------------------------------------------

import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import Link from '../../src/components/link.jsx'

// prep ------------------------------------------------------------------------

const defaultProps = {
  active: false,
  clickHandler: () => {},
  text: 'foo',
}

let defaultOutput

const render = overrides => {
  const props = Object.assign({}, defaultProps, overrides)
  const output = shallowRender(<Link {...props} />)
  return { props, output }
}

// cases -----------------------------------------------------------------------

exports['<Link />'] = {

  before: () => {
    defaultOutput = render().output
  },

  'is <a> if props.active === false': () => {
    expect(defaultOutput.type).to.equal('a')
  },

  'is <span> if props.active === true': () => {
    const { output } = render({ active: true })
    expect(output.type).to.equal('span')
  },

  'receives props.text': () => {
    expect(defaultOutput.props.children).to.equal(defaultProps.text)
  },

  'handles clicks with props.clickHandler': () => {
    const spy = sinon.spy()
    const { output } = render({ clickHandler: spy })
    output.props.onClick()
    expect(spy.called).to.equal(true)
  },

}
