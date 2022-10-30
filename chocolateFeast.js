// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
    let eatenFirst = n/c;
    let wrappers = Math.trunc(eatenFirst/m);
    //console.log("chochlates first ",eatenFirst);
    if (eatenFirst == m) {
        return eatenFirst + 1;
    } else if (eatenFirst > m) {
        console.log("test");
    }

}

console.log(chocolateFeast(15, 3, 2));
console.log(chocolateFeast(10, 2, 5));