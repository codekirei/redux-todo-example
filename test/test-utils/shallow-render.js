import { createRenderer } from 'react-addons-test-utils'

const shallowRender = jsx => {
  const renderer = createRenderer()
  renderer.render(jsx)
  return renderer.getRenderOutput()
}

export default shallowRender
