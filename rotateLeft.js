// https://www.hackerrank.com/challenges/array-left-rotation/problem

function rotLeft(a, d) {
    // Write your code here
    for (let i = 1; i <= d; i += 1) {
        let first = a.shift();
        a.push(first);
    }
    return a;
}

console.log(rotLeft([1,2,3,4,5],4));