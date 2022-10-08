// https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
    let H = 1;
    
    // if growing cycle (n) equals 0 return 1
    if (n == 0) {
        return H;
    } else {
        // if growing cycle (n) if larger than 0,
        // calculate:
        // odd cycles as (H * 2), spring cycle doubles height,
        // even cycles as (H + 1), summer cycle grows 1 meter
        for (let i = 1; i <= n; i++) {
            i % 2 != 0 ? H = H * 2 : H = H + 1;
        }
        return H;
    }
}

console.log(utopianTree(4));