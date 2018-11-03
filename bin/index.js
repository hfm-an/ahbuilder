#!/usr/local/bin/node

const fs = require('fs')
const path = process.cwd()
const pkg = require('./../package.json')

/**
 * Main script resolve entry.
 */

function ahScripts (pcs) {
    const params = pcs.splice(2)
    params.map(param => scriptResolve(param))
}

/**
 * Verify validity of script param.
 */

function verifyScripts (param) {
    const VALID_PARAM = [
        // version
        '-v',
        // help
        '-h'
    ]
    return VALID_PARAM.includes(param)
}

/**
 *
 */

function scriptResolve (param) {
    const verifyResult = verifyScripts(param)
    if (!verifyResult) {
        console.log(`Error : invalid script param : ${param}`)
        return
    }

    switch (param) {
        case '-v' :
            console.log(`Ah-builder's version is ${pkg.version}`)
            break
    }
}

ahScripts(process.argv)