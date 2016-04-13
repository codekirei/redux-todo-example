import { jsdom } from 'jsdom'

const document = jsdom('')
const window = document.defaultView

global.document = document
global.window = window
global.navigator = { userAgent: 'node.js' }
