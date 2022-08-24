function diagDiff(arr){
    let rtl = 0;
    let ltr = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        ltr += arr[i][i];
    }
    for (let j = arr.length-1; j >= 0; j -=1) {
        rtl += arr[j][arr.length - 1 - j];
    }
    sum = Math.abs(rtl - ltr);
    return sum;
}

let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(diagDiff(arr));
