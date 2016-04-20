const writeFile = require('fs').writeFile
const packageJs = require('../package')

writeFile('package.json', JSON.stringify(packageJs), err => { if (err) throw err })
