// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let count = 0;

    let arr = new Array();
    arr = [];

    if (m == 1) {
        return (s[0] === d) ? 1 : "";
    } else if (m > 1) {
        for (let i = 0; i < s.length; i++) {
            arr.push(s.slice(i,m+i));
        }
    }
    
    arr.forEach(function(v,i,a) {
        if (v.reduce((p,c) => p+c,0) === d) {count++}});

    return count;
}

console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1],18,7));