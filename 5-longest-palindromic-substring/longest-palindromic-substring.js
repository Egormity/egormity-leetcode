const isValidPolindrome = s => {
    if (s.length === 1) return true;
    for (let i = 0; i <= s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    };
    return true;
} 
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = s[0];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            const sl = s.slice(i, j);
            if (sl.length > longest.length && isValidPolindrome(sl)) longest = sl;
        };
    };
    return longest;
};