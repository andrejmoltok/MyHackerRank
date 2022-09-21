// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    const hash = '#';
    const space = ' ';
    for (let i = n, j = 1; i > 0 && j <= n; i -= 1, j += 1) {
        console.log(space.repeat(i-1) + hash.repeat(j));
    }
}

staircase(6);