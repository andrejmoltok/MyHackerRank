function countingValleys(steps, path) {
    let valleys = 0;
    let level = 0;
    for (let i = 0; i < steps; i++) {
        // if going up increase `level` variable
        if (path[i] == 'U') {
            level++;
        }
        // if going up decrease `level` variable
        if (path[i] == 'D') {
            level--;
        }
        // while going up and going down increases/decreases `level` variable
        // look at if going up AND the level is already 0
        // then increase `valleys` counter
        if (path[i] == 'U' & level == 0) {
            valleys++;
        }
    }
    return valleys;
}

console.log(countingValleys(8,"UDDDUDUU"));   
console.log(countingValleys(12,"DDUUDDUDUUUD"));
console.log(countingValleys(10,"UDUUUDUDDD"));