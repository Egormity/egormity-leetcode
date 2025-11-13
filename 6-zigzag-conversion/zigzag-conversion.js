/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const rows = Array.from({ length: numRows }, () => []);
    let curRow = 0;
    let direction = "+";
    for (let i = 0; i < s.length; i++) {
        rows[curRow].push(s[i]);
        if (i !== 0 && i % (numRows - 1) === 0) direction = direction === "+" ? "-" : "+";
        curRow += direction === "+" ? 1 : -1;
    };
    return rows.map(el => el.join("")).join("");
};