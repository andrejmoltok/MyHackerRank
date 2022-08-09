/* NOT SOLVED YET */

// flip a 2n*2n matrix to obtain the biggest sum possible in the upper-left quadrant of the matrix
function flip(matrix) {
    //check for the largest numbers in the matrix
    let large = [];
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            if (matrix[i][j] > matrix[i][j+1]) {
                large.push(matrix[i][j]);
            } else {
                large.push(matrix[i][j+1]);
            }
        }
    }
    //return the index of the largest numbers
    //then move/flip them to be in the upper-left quadrant of the matrix
    //then sum the values and return it

}

let mx = [
    [112, 91, 84, 119],
    [108, 55, 77, 104],
    [73, 44, 29, 41],
    [25, 60, 125, 11]
];

flip(mx);