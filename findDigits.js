function findDigits(n) {
    let arr = Array.from(String(n));
    let count = 0;
    // arr.forEach((v) => {
    //     if (n % v == 0) {
    //         count++;
    //     }
    // });
    const modder = (a,b) => {let c = a / b; return a - (b * c)};
    return arr.reduce((p,c) => {(modder(n,c) === 0) ? p++ : 0; return p;},0);
    //return n.toString().split("").reduce((p,v) => p+= ~~!Math.sign(Math.abs(n%v)), 0);
}

console.log(findDigits(124));
console.log(findDigits(1012));