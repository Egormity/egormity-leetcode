function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    return (x + "").split("").reverse().join("") === x + "";
    // let reversed = 0;
    // while (x !== 0) {

    // };
    // return x === reversed
};