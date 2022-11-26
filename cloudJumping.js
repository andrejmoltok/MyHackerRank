function jumpingOnClouds(c, k) {
    let n = c.length;
    let e = 100;
    let i = 0;
    do {
        i = (i+k) % n;
        c[i] == 0 ? e -= 1 : e -= 3;
        console.log(i, c[i], e);
    } while (i !== 0);
    return e;
}

console.log(jumpingOnClouds([0,0,1,0,0,1,1,0], 2));
console.log(jumpingOnClouds([1,1,1,0,1,1,0,0,0,0], 3));