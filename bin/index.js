#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const fs = require('fs')
const path = require('path')
const packagePath = path.resolve(__dirname, '../package.json')
const packageContent = JSON.parse(fs.readFileSync(packagePath))
const { version } = packageContent

program.version(version, '-v,-V,--version')
program.parse(process.argv)
