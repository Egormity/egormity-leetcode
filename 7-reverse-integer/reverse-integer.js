/**
 * @param {number} x
 * @return {number}
 */
const max = 2 ** 31;
var reverse = function(x) {
    const isNegative = x < 0;
    const result = +(x + "").slice(isNegative ? 1 : 0).split("").reverse().join("") * (isNegative ? -1 : 1);
    if (result < -max || result > max + 1) return 0;
    return result;
};