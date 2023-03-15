// https://www.hackerrank.com/challenges/flipping-bits/problem

function flippingBits(n) {
    // Write your code here
    let toConvert = n.toString(2)
    let flipped = ''
    //console.log(toConvert)
    if (toConvert.length < 32) {
        let converted = toConvert.padStart(32, 0)
        //console.log(converted);
        for (let i = 0; i < converted.length; i++) {
            if (converted[i] === '1') {
                flipped += '0'
            } else  {
                flipped += '1'
            }
        }
        return parseInt(flipped,2)
    } else {
        for (let i = 0; i < toConvert.length; i++) {
            if (toConvert[i] === '1') {
                flipped += '0'
            } else  {
                flipped += '1'
            }
        }
        return parseInt(flipped,2)
    }
}

console.log(flippingBits(9));
console.log(flippingBits(2147483647));