// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    let csomagolo = Math.floor(n/c);
    let csoki = m;
    let csere = Math.floor(csomagolo / csoki);
    console.log(n + " / " + c + " = " + csere);
    if (csomagolo < csoki) {
        return csomagolo;
    } else if (csomagolo == csoki) {
        return;
    }
}

console.log(chocolateFeast(15, 3, 2));
console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(7, 3, 2));