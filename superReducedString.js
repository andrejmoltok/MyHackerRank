// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
    // Write your code here
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === arr[i+1]) {
            arr.splice(i,2);
            i = -1;
        }
        arr.join('');
    }
    if (arr.length === 0) {
        return 'Empty String';
    } else {
        return arr.join('');
    }
}


console.log(superReducedString('aaabccddd'));
console.log(superReducedString('baab'));
