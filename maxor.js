function maximizingXor(l, r) {
    // Write your code here
    let arr = [];
    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) {
            //console.log(i,j);
            arr.push(i ^ j)
        }
    }
    return arr.sort((a,b) => {return b-a})[0];
}

console.log(maximizingXor(10,15));