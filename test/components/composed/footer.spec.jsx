// modules -------------------------------------------------

import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import Footer from '../../../src/components/composed/footer.jsx'
import { prodStore } from '../../../src/store'

// setup ---------------------------------------------------

chai.use(chaiEnzyme())
const store = prodStore()
// const output = shallow(<Footer />, { context: { store } })

// cases ---------------------------------------------------

// exports['<Footer />'] = {
//
//   'is a <p>': () => expect(output).to.have.tagName('p'),
//
// }
