function isPalindrome(x: number): boolean {
    if (x < 0 || (x && x % 10 === 0)) return false;
    // return (x + "").split("").reverse().join("") === x + "";
    let reversed = 0;
    const copy = x;
    while (x !== 0) {
        const num = x % 10;
        x = Math.floor(x / 10);
        reversed = reversed * 10 + num;
    };
    return copy === reversed;
};