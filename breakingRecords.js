function breakingRecords(scores) {
    let winlose = [0,0];
    let high = scores[0];
    let low = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i];
            winlose[0] += 1; 
        } else if (scores[i] < low) {
            low = scores[i];
            winlose[1] += 1;
        } else if (scores[i] > low && scores[i] < high) {
            winlose[0] += 0;
            winlose[1] += 0;
        } 
    }
    return winlose;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2,4]
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // [4,0]
console.log(breakingRecords([17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50])); // [5,1]
