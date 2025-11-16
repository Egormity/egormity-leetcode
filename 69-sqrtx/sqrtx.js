/**
 * @param {number} x
 * @return {number}
 */
3600
var mySqrt = function(x) {
    return Math.floor(x ** 0.5);
    let i = 0;
    while (i ** 2 <= x) {
        i = i + 1;
    };
    return i - 1;
};