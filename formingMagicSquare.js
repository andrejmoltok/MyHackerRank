function formingMagicSquare(s) {
    const middle = 5;
    for (let i = 0; i < 2; i++) {
        let atlos = 0;
        for (let j = 0; j < s[i].length; j++) {
            atlos += s[i][j];
            
        }
        console.log("atlos"+ i + " : " + atlos);
    }
    for (let k = 0; k < 3; k++) {
        let sor = 0;
        for (l = 0; l < 3; l++) {
            sor += s[k][l];
        }
        console.log("sor" + k + " : " + sor);
    }
    for (let m = 0; m < 3; m++) {
        let oszlop = 0;
        for (let n = 0; n < 3; n++) {
            oszlop += s[n][m];
        }
        console.log("oszlop" + m + " : " + oszlop);
    }
}

console.log(formingMagicSquare([
            [5, 3, 4], 
            [1, 5, 8], 
            [6, 4, 2]]
            ));