// /**
//  * @param {string} s
//  * @return {number}
//  */
// var myAtoi = function(s) {
//     // return Math.max(Math.min(parseInt(s) || 0, 2147483647 ), -2147483648);
//     s = s.trim();
//     let output = "+-".includes(s[0]) ? s[0] : "";
//     if (output.length === 1) s = s.slice(1);
//     for (const char of s) {
//         if (!"1234567890".includes(char)) break;
//         output += char;            
//     };
//     return Math.max(Math.min(+output || 0, 2147483647 ), -2147483648);
// };

/**
 * Converts a string to a 32-bit signed integer (similar to C/C++ atoi function)
 * @param str - The input string to be converted
 * @returns The converted integer, clamped to 32-bit signed integer range
 */
const myAtoi = function (str) {
    // Remove leading and trailing whitespace
    str = str.trim();
  
    // Return 0 for empty string
    if (!str) return 0;
  
    // Track sign of the number (1 for positive, 0 for negative)
    let isPositive = 1;
    let index = 0;
    let result = 0;
  
    // Check for explicit sign character
    if (str[index] === '+') {
        isPositive = 1;
        index++;
    } else if (str[index] === '-') {
        isPositive = 0;
        index++;
    }
  
    // Process digits
    for (; index < str.length; index++) {
        // Convert character to digit (ASCII '0' is 48)
        const digit = str.charCodeAt(index) - 48;
      
        // Stop if character is not a digit
        if (digit > 9 || digit < 0) break;
      
        // Check for overflow before updating result
        // INT_MAX = 2147483647, INT_MIN = -2147483648
        if (result > 2147483647 / 10 || result > (2147483647 - digit) / 10) {
            return isPositive ? 2147483647 : -2147483648;
        } else {
            result = result * 10 + digit;
        }
    }
  
    // Return result with appropriate sign
    return isPositive ? result : -result;
};