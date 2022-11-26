// https://www.hackerrank.com/challenges/library-fine/problem

// d1,m1,y1 - returned date
// d2,m2,y2 - due date

function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 < y2) {
        return 0;
    } else if (y1 <= y2 && m1 < m2) {
        return 0;
    } else if (y1 <= y2 && m1 <= m2 && d1 <= d2) {
        return 0;
    } else if (d1 > d2 && m1 === m2 && y1 === y2) {
        return 15 * (d1 - d2);
    } else if (m1 > m2 && y1 === y2) {
        return 500 * (m1 - m2);
    } else if (y1 > y2) {
        return 10000;
    }
}

console.log(libraryFine(14, 7, 2018, 5, 7, 2018)); // 135
console.log(libraryFine(9, 6, 2015, 6, 6, 2015)); // 45
console.log(libraryFine(2, 7, 1014, 1, 1, 1015)); // 0
console.log(libraryFine(28, 2, 2015, 15, 4, 2015)); // 0