#!/usr/local/bin/node

const fs = require('fs')
const path = process.cwd()

const scripts = {
    version : require('./version')
}

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
        '-v'
    ]
    return VALID_PARAM.includes(param)
}

/**
 * Resolve the command scripts.
 */

function scriptResolve (param) {
    const verifyResult = verifyScripts(param)
    if (!verifyResult) {
        console.log(`[Error] : invalid script param : ${param}`)
        return
    }

    // resolve function map
    const RESOLVE_FUNC_MAP = {
        '-v' : 'version'
    }

    const resolveParamFuncName = scripts[RESOLVE_FUNC_MAP[param]]

    // call the resolve func.
    resolveParamFuncName()
}

ahScripts(process.argv)