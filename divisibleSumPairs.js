function divSumPairs(n, k , ar) {
    let count = 0;

    let arr = [];

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            arr.push([ar[i],ar[j+1]]);
        }
    }
    //console.log(arr);
    arr.forEach(function(v,i,a) {
        if (v.reduce((p,c) => p+c,0) % k === 0) {
            //console.log(a[i]);
            count++;
        };
    });

    return count;
}

console.log(divSumPairs(6,3,[1, 3, 2, 6, 1, 2]));