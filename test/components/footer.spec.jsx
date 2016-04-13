// modules -------------------------------------------------

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { expect } from 'chai'

import Footer from '../../src/components/footer.jsx'
// import Link from '../../../src/components/connected/link'
// import reducer from '../../../src/reducers'

// setup ---------------------------------------------------

// const store = createStore(reducer)

let output

// cases ---------------------------------------------------

// exports['<Footer />'] = {
//
//   before: () => {
//     output = mount(
//       <Provider store={store}>
//         <Footer />
//       </Provider>
//     )
//   },
//
//   'is a <p>': () => {
//     expect(output).to.have.tagName('p')
//   },
//
//   'contains Show:': () => {
//     console.log(output.children())
//   },
//
//   'contains 2 <a>s': () => {
//     expect(output.find('a').length).to.equal(2)
//   },
//
// }
