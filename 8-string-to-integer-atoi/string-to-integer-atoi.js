/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    return Math.max(Math.min(parseInt(s) || 0, 2147483647 ), -2147483648);
    s = s.trim();
    let output = s.startsWith("-") ? "-" : "";
    if (output === "-") s = s.slice(1);
    for (const char of s) {
        if (!"1234567890".includes(char)) break;
        output += char;            
    };
    return +output || 0;
};