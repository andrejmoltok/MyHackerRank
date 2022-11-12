// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

//solution 1

// function beautifulDays(i, j, k) {
//     let count = 0;
//     for (let a = i; a <= j; a++) {
//         let rev = Number(a.toString().split('').reverse().join(''));
//         Math.abs(i - rev) % k == 0 ? count++ : "";
//     }
//     return count;
// }

// solution 2

function beautifulDays(i, j, k) {
    const range = (start, end) => Array.from({ length: (end - start) + 1}, (_, idx) => i + idx);
    return range(i,j).reduce(function(p,c) {
        Math.abs(c - Number(c.toString().split('').reverse().join(''))) % k == 0 ? p++ : p; return p;},0);
}

console.log(beautifulDays(20,23,6));