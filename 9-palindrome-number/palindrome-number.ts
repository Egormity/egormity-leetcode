function isPalindrome(x: number): boolean {
    return (x + "").split("").reverse().join("") === x + "";
};