function birthdayCakeCandles(arr) {
    let count = 0;
    let largest = arr.reduce(function(p,c) {
        return Math.max(p,c)
    });
    console.log(largest);
    for (let i = 0; i < arr.length; i += 1) {
        if (largest === arr[i]) {
            count++
        }
    }
    console.log(count);
}

birthdayCakeCandles([3,2,1,3]);
birthdayCakeCandles([4,2,1,4]);