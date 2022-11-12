// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
    // Write your code here
    // const list = s.split('');
    // let charToDel = 0;
    // for (let i = 0; i < list.length; i += 1) {
    //     if (list[i] === list[i + 1]) {
    //         charToDel+=1;
    //     }
    // }
    // return charToDel;
    return s.split('').reduce(function(p,c,i,a) {a[i] == a[i+1] ? p++ : p;return p;}, 0);
}


console.log(alternatingCharacters('AAABBB')); 
console.log(alternatingCharacters('BABABA'));