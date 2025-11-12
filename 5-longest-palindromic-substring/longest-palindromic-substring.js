/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // let longest = s[0];
    // const isValidPolindrome = s => {
    //     if (s.length === 1) return true;
    //     for (let i = 0; i <= s.length / 2; i++) {
    //         if (s[i] !== s[s.length - 1 - i]) return false;
    //     };
    //     return true;
    // } 
    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i + 1; j < s.length + 1; j++) {
    //         const sl = s.slice(i, j);
    //         if (sl.length > longest.length && isValidPolindrome(sl)) longest = sl;
    //     };
    // };
    let longest = [0, 0];
    const helper = (l, r) => {
        while (s[l] === s[r] && l >= 0 && r < s.length) {
        if (r - l > longest[1] - longest[0]) longest = [l, r];
        l--;
        r++;
        }
    };
    for (let i = 0; i < s.length; i++) {
        helper(i - 1, i + 1);
        helper(i, i + 1);
    }
    return s.slice(longest[0], longest[1] + 1);
};