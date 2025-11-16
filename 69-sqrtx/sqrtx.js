/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let i = 0;
    while (i ** 2 <= x) {
        i = i + 1;
    };
    return i - 1;
};