// https://www.hackerrank.com/challenges/drawing-book/problem
// n - number of pages in the book
// p - page you need to flip to

function pageCount(n, p) {
    if (p == 1) {
        return 0;
    } else if (p % 2 !== 0 && p == n-1) {
        return 1;
    } else if (p % 2 === 0 && p == n-1) {
        return 0;
    } else if (p <= (n / 2)) {
        return Math.floor(p / 2);
    } else if (p >= (n / 2)) {
        return Math.floor((n - p) / 2);
    }
}


console.log(pageCount(7,3));
console.log(pageCount(6,5));