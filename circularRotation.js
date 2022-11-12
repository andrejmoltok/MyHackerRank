// https://www.hackerrank.com/challenges/circular-array-rotation/problem

function circularArrayRotation(a, k, queries) {
    // Write your code here
    // let result = new Array();
    result = [];
    for (let i = 1; i <= k; i += 1) {
        let last = a.pop();
        a.unshift(last);
    }
    for (let j = 0; j < queries.length; j += 1) {
        result.push(a[queries[j]]);
    }
    return result;
}

console.log(circularArrayRotation([3,4,5],2,[1,2]));