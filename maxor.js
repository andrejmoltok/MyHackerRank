// function maximizingXor(l, r) {
//     // Write your code here
//     let arr = [];
//     for (let i = l; i <= r; i++) {
//         for (let j = i; j <= r; j++) {
//             //console.log(i,j);
//             arr.push(i ^ j)
//         }
//     }
//     return arr.sort((a,b) => {return b-a})[0];
// }

//faster version
function maximizingXor(l, r) {
    // Write your code here
    let arr = [];
    let temp = 0;
    let max = 0;
    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            let a = i ^ j;
            if (a > temp) {
                temp = a;
                max = temp;
            }
            if (a == temp) {
                temp = a;
                max = max;
            }
            if (a < temp) {
                continue;
            }
        }
    }
    return max;
}

console.log(maximizingXor(10,15));