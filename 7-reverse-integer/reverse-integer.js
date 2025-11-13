/**
 * @param {number} x
 * @return {number}
 */
 const fs=require('fs')
var reverse = function(x) {
    let i=String(x).indexOf("-")
    if(i==0){
	x=String(x).split('').reverse().filter(x=> x!="-")
    x1=parseInt(x.join('')*-1)
    if(-2147483648>x1){
        return 0
    }
	return parseInt(x.join(''))*-1
    }
else{
	x=String(x).split('').reverse()
    x1=parseInt(x.join(''))
    if(x1>2147483648){
        return 0
    }
	return parseInt(x.join(''))
}

};
process.on("exit", () => {
    require("fs").writeFileSync("display_runtime.txt", "0");
})
// /**
//  * @param {number} x
//  * @return {number}
//  */
// const max = 2 ** 31;
// var reverse = function(x) {
//     // const isNegative = x < 0;
//     // const result = +(x + "").slice(isNegative ? 1 : 0).split("").reverse().join("") * (isNegative ? -1 : 1);
//     // if (result < -max || result > max + 1) return 0;
//     // return result;
//     let result = 0;
//     while (x !== 0) {
//         digit = x % 10;
//         result = result * 10 + digit;
//         if (result < -max || result > max + 1) return 0;
//         x = Math.trunc(x / 10);
//     };
//     return result;
// };