const fs = require('fs-extra')
const path = require('path')
let rootDir = path.join(__dirname,'../')
fs.removeSync(path.join(rootDir,'dist'))
fs.copySync(path.join(rootDir,'src/views'),path.join(rootDir,'dist/views'))
fs.copySync(path.join(rootDir,'static'),path.join(rootDir,'dist/static'))