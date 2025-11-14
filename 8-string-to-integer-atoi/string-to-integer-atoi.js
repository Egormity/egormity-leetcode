/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // return Math.max(Math.min(parseInt(s) || 0, 2147483647 ), -2147483648);
    s = s.trim();
    let output = "+-".includes(s[0]) ? s[0] : "";
    if (output.length === 1) s = s.slice(1);
    for (const char of s) {
        if (!"1234567890".includes(char)) break;
        output += char;            
    };
    return Math.max(Math.min(+output || 0, 2147483647 ), -2147483648);
};