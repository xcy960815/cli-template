/**
 * 更新package json的版本号
 * 递增逻辑 xx.xx.xx 每个小版本号 最大到10
 * @param {当前的版本号} currentVersion
 * @returns 递增之后的版本号
 */
module.exports = function updateVersion(currentVersion) {
    const nums = currentVersion.split('.')
    let firstNum = Number(nums[0])
    let secondNum = Number(nums[1])
    let thirdNum = Number(nums[2])
    thirdNum++
    if (thirdNum >= 10) {
        thirdNum = 0
        secondNum++
        if (secondNum >= 10) {
            secondNum = 0
            firstNum++
        }
    }
    return `${firstNum}.${secondNum}.${thirdNum}`
}
