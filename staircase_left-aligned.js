function staircase(n) {
    const hash = '#';
    const space = ' ';
    for (let i = 1, j = n; i <= n && j > 0; i += 1, j -= 1) {
        console.log(hash.repeat(i) + space.repeat(j - 1));
    }
}

staircase(6);