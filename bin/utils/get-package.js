const fs = require('fs')
const path = require('path')
/**
 * 获取package的属性
 * @params package.json 里面的属性
 * @returns
 */
module.exports = function getPackage(packageKey) {
    const packagePath = path.resolve(__dirname, '../../package.json')
    const packageContent = JSON.parse(fs.readFileSync(packagePath))
    return packageKey ? packageContent[packageKey] : packageContent
}
