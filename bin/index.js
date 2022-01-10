#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const checkInternet = require('./utils/check-internet')
const getPackage = require('./utils/get-package')
const version = getPackage('version')

program.version(version, '-v,-V,--version')

program
    .command('world')
    .description('测试指令')
    .action(async () => {
        await checkInternet()
        console.log('hellow world')
        process.exit(1)
    })

program.parse(process.argv)
