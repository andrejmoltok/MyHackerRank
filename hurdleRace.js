// https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
    let max = Math.max(0,...height);
    if (max < k) {return 0;}
    else {return max - k;};
}