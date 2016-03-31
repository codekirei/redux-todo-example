import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import { DevRoot, ProductionRoot } from '../../src/components/link.jsx'
import Footer from '../../src/components/footer.jsx'
import DevTools from '../../src/components/devtools.jsx'
import TodoFormContainer from '../../src/containers/todo-form-container'
import TodoListContainer from '../../src/containers/todo-list-container'

chai.use(chaiEnzyme())
let output

exports['<DevRoot />'] = {}
