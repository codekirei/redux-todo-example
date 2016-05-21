// modules - node --------------------------------------------------------------

import { equal } from 'assert'

// modules - local -------------------------------------------------------------

import { DevRoot, ProdRoot } from '../../src/components/root.jsx'

// modules - test utils --------------------------------------------------------

import nameOf from '../test-utils/name-of'
import shallowRender from '../test-utils/shallow-render'

// cases -----------------------------------------------------------------------

exports['COMPONENT: Root:'] = {

  'DevRoot contains expected children': () => {
    const { output } = shallowRender(DevRoot)()
    equal(output.type, 'div')
    equal(output.props.children.length, 4)
    const children = [
      'TodoForm',
      'TodoList',
      'Footer',
      'DevTools',
    ]
    output.props.children.forEach((child, i) => equal(nameOf(child), children[i]))
  },

  'ProdRoot contains expected children': () => {
    const { output } = shallowRender(ProdRoot)()
    equal(output.props.children.length, 3)
  },

}
