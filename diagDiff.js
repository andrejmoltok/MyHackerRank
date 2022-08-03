function diagDiff(arr){

    // the rows and cols of the 2d matrix can modify; lines = n;
    // calculate diagonals => 
    // left-to-right => (arr[0][0]+arr[1][1]+arr[2][2]) = ltr
    // right-to-left => (arr[0][2]+arr[1][1]+arr[2][0]) = rtl
    // sum = Math.abs(ltr - rtl)

    let rtl = 0;
    let ltr = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i += 1) {
        //console.log(arr[i][i]);
        ltr += arr[i][i];
        
       //sum = Math.abs(ltr - rtl);
    }
    for (let j = arr.length-1; j >= 0; j -=1) {
       // console.log(arr[j][2 - j]);
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

//1+5+9 - 3+5+7 = |15-15|

console.log(diagDiff(arr));
