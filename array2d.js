// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
    let pattern = [
        [arr[0][0],arr[0][1],arr[0][2],arr[1][1],arr[2][0],arr[2][1],arr[2][2]],
        [arr[0][1],arr[0][2],arr[0][3],arr[1][2],arr[2][1],arr[2][2],arr[2][3]],
        [arr[0][2],arr[0][3],arr[0][4],arr[1][3],arr[2][2],arr[2][3],arr[2][4]],
        [arr[0][3],arr[0][4],arr[0][5],arr[1][4],arr[2][3],arr[2][4],arr[2][5]],
        //----------------------------------------------------------------------
        [arr[1][0],arr[1][1],arr[1][2],arr[2][1],arr[3][0],arr[3][1],arr[3][2]],
        [arr[1][1],arr[1][2],arr[1][3],arr[2][2],arr[3][1],arr[3][2],arr[3][3]],
        [arr[1][2],arr[1][3],arr[1][4],arr[2][3],arr[3][2],arr[3][3],arr[3][4]],
        [arr[1][3],arr[1][4],arr[1][5],arr[2][4],arr[3][3],arr[3][4],arr[3][5]],
        //----------------------------------------------------------------------
        [arr[2][0],arr[2][1],arr[2][2],arr[3][1],arr[4][0],arr[4][1],arr[4][2]],
        [arr[2][1],arr[2][2],arr[2][3],arr[3][2],arr[4][1],arr[4][2],arr[4][3]],
        [arr[2][2],arr[2][3],arr[2][4],arr[3][3],arr[4][2],arr[4][3],arr[4][4]],
        [arr[2][3],arr[2][4],arr[2][5],arr[3][4],arr[4][3],arr[4][4],arr[4][5]],
        //----------------------------------------------------------------------
        [arr[3][0],arr[3][1],arr[3][2],arr[4][1],arr[5][0],arr[5][1],arr[5][2]],
        [arr[3][1],arr[3][2],arr[3][3],arr[4][2],arr[5][1],arr[5][2],arr[5][3]],
        [arr[3][2],arr[3][3],arr[3][4],arr[4][3],arr[5][2],arr[5][3],arr[5][4]],
        [arr[3][3],arr[3][4],arr[3][5],arr[4][4],arr[5][3],arr[5][4],arr[5][5]],
    ];
let result = [];

for (let i = 0; i < pattern.length; i++) {
    let sum = 0;
    for (let j = 0; j < pattern[i].length; j++) {
        sum += pattern[i][j];
    }
    result.push(sum);
}

return Math.max.apply(null,result);

}

let arr2d = [[1, 1, 1, 0, 0, 0],
             [0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0],
             [0, 0, 2, 4, 4, 0],
             [0, 0, 0, 2, 0, 0],
             [0, 0, 1, 2, 4, 0]];

console.log(hourglassSum(arr2d));