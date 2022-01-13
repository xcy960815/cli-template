/**
 * 检查当前node版本
 */
const semver = require('semver')
const chalk = require('chalk')
const getPackage = require('./get-package')

module.exports = function checkNodeVersion() {
    const { engines, name } = getPackage()
    // node范围
    const requiredVersion = engines.node
    const compliantVersion = semver.satisfies(
        process.version,
        requiredVersion,
        {
            includePrerelease: true,
        }
    )
    // 如果node版本不符合 就给用户提示
    if (!compliantVersion) {
        console.log(
            chalk.red(
                `\n您当前使用的Node版本为${process.version}\n\n但此版本的${name}需要Node的版本为 ${requiredVersion}\n\n请升级您的Node版本。`
            )
        )

        process.exit(1)
    }
}
