// https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
    let re = /\s/g;
    let noSpace = s.replace(re,'');
    //console.log(noSpace.length);
    let row = Math.floor(Math.sqrt(noSpace.length));
    let column = Math.ceil(Math.sqrt(noSpace.length));
    //console.log(row, column);
    let output = [];
    let str = "";
    if (row*column < noSpace.length) {
        for (let k = 0; k < column*column; k+=column) {
            output.push(noSpace.slice(k,column+k));
        }
        for (var i = 0; i < column; i++) {
            for (var j = 0; j < column; j++) {
                if (output[j][i] == undefined) {
                    continue;
                }
                str += output[j][i];
            }
            str += " ";
        }
        return str;
    } else {
        for (let k = 0; k < row*column; k+=column) {
            output.push(noSpace.slice(k,column+k));
        }
        for (var i = 0; i < column; i++) {
            for (var j = 0; j < row; j++) {
                if (output[j][i] == undefined) {
                    continue;
                }
                str += output[j][i];
            }
            str += " ";
        }
        return str;
    }
}

console.log(encryption("if man was meant to stay on the ground god would have given us roots"));
console.log(encryption("chillout"));