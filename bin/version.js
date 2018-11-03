const pkg = require('./../package.json')

module.exports = function versionScript () {
    console.log(`Ah-builder's version is ${pkg.version}`)
}