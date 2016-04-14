// modules ---------------------------------------------------------------------

import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import connectedComponent from '../test-utils/connected-component'
import Footer, { separator, filters } from '../../src/components/footer.jsx'

// setup -----------------------------------------------------------------------

let defaultOutput

const render = shallowRender(Footer)

// cases -----------------------------------------------------------------------

exports['<Footer />'] = {

  before: () => {
    defaultOutput = render().output
  },

  'is <p>': () => {
    expect(defaultOutput.type).to.equal('p')
  },

  'has 3 links as children': () => {
    const links = defaultOutput.props.children[2].filter(child => child !== separator)
    expect(links.length).to.equal(3)
    expect(links.every(link => connectedComponent(link) === 'Link')).to.equal(true)
    filters.forEach(({ text }, i) => expect(links[i].props.text).to.equal(text))
  },

}
