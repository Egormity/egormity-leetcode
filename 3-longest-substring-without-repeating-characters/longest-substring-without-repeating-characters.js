/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        while(stack.includes(char)) stack.shift();
        stack.push(char);
        max = Math.max(max, stack.length);
    };
    return max;
};