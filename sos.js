// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
    // how many repetitions of SOS is in message
    let msgLen = s.split('').length / 3;
    // create SOS message of length of original input
    let orig = [...Array(msgLen).fill('SOS').join('')];
    // check if current letter is equal to originals letter,
    // if Yes, then return previous value,
    // if No, then increment by one
    // then return p
    return s.split('').reduce((p,c,i) => {c==orig[i]?p:p++;console.log(p,c,i,orig[i]);return p;},0);
}

console.log(marsExploration("SOSSOSSSSOSOIEISOSPOISOSIUSISO"));