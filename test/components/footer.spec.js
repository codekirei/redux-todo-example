// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import Footer, { separator, filters } from '../../src/components/footer.jsx'

// modules - test utils --------------------------------------------------------

import nameOf from '../test-utils/name-of'
import shallowRender from '../test-utils/shallow-render'

// setup -----------------------------------------------------------------------

const render = shallowRender(Footer)

let defaultOutput

// cases -----------------------------------------------------------------------

exports['COMPONENT: Footer:'] = {

  'before': () => {
    defaultOutput = render().output
  },

  'is <p>': () => {
    equal(defaultOutput.type, 'p')
  },

  'has 3 links as children': () => {
    const links = defaultOutput.props.children[2].filter(child => child !== separator)
    equal(links.length, 3)
    equal(links.every(link => nameOf(link) === 'Link'), true)
    filters.forEach(({ text }, i) => equal(links[i].props.text, text))
  },

}
