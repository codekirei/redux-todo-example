import { createElement } from 'react'
import { createRenderer } from 'react-addons-test-utils'

const shallowRender = (Component, defaultProps) => overrideProps => {
  const props = Object.assign({}, defaultProps, overrideProps)
  const renderer = createRenderer()
  renderer.render(createElement(Component, { ...props }))
  const output = renderer.getRenderOutput()
  return { props, renderer, output }
}

export default shallowRender
