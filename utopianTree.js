// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
    let H = 1;
    if (n == 0) {
        return H;
    } else {
        for (let i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                H = H * 2;
            } else {
                H = H + 1;
            }
        }
        return H;
    }
}

console.log(utopianTree(4));