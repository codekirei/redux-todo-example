// modules ---------------------------------------------------------------------

import { expect } from 'chai'

import shallowRender from '../test-utils/shallow-render'
import nameOf from '../test-utils/name-of'
import { DevRoot, ProdRoot } from '../../src/components/root'

// cases -----------------------------------------------------------------------

exports['<Root />'] = {

  '<DevRoot />': () => {
    const devRoot = shallowRender(DevRoot)().output
    expect(devRoot.type).to.equal('div')
    expect(devRoot.props.children.length).to.equal(4)
    const [todoForm, todoList, footer, devTools] = devRoot.props.children
    expect(nameOf(todoForm)).to.equal('TodoForm')
    expect(nameOf(todoList)).to.equal('TodoList')
    expect(nameOf(footer)).to.equal('Footer')
    expect(nameOf(devTools)).to.equal('DevTools')
  },

  '<ProdRoot />': () => {
    const prodRoot = shallowRender(ProdRoot)().output
    expect(prodRoot.props.children.length).to.equal(3)
  },

}
