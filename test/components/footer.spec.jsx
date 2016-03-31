// modules -------------------------------------------------

import React from 'react'
import { shallow, mount } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Footer from '../../src/components/footer.jsx'

// setup ---------------------------------------------------

chai.use(chaiEnzyme())
const output = shallow(<Footer />)
// const output = shallow(<Footer />)

// cases ---------------------------------------------------

exports['<Footer />'] = {

  'is a <p>': () => expect(output).to.have.tagName('p'),

}
