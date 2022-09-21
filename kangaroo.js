// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    // repeat addition until x1 = x2
    let jumps = Math.abs(x1 - x2) / Math.abs(v2 - v1);
    if (v1 === v2 && (x1 > x2 || x2 > x1)) {
        return 'NO';
    }
    for (let i = 0; i < jumps; i += 1) {
        x1 = x1 + v1;
        x2 = x2 + v2;
    }
    if (x1 === x2) {
        return 'YES';
    }
    else
    {
        return 'NO';
    }
}

console.log(kangaroo(43, 2, 70, 2));
console.log(kangaroo(0,3,4,2));
console.log(kangaroo(63, 8, 94, 3));
console.log(kangaroo(1817, 9931, 8417, 190));
//console.log(kangaroo(1571, 4240, 9023, 4234));