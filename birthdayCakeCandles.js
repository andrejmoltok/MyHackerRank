// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    let largest = candles.reduce(function(p,c) {return Math.max(p,c)});
    return candles.reduce(function(p,c,i,a) {largest == c ? p++ : p; return p;},0);
}

console.log(birthdayCakeCandles([3,2,1,3]));
console.log(birthdayCakeCandles([4,2,1,4]));