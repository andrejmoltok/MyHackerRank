function sockMerchant(n, ar) {
    // n - is number of socks
    // ar - array of colors of the socks
    // return how many pairs are there
    let arr = [];
    let sorted = ar.sort(function(a,b){return(a-b)});
    console.log(sorted);
    for (let i = 0; i < n; i+=1) {
        let count = 0;
        if (sorted[i] == sorted[i+1]) {
            count += 2;
            arr.push(count);
            i += 1;
        }
    }
    return arr.length;
}

console.log(sockMerchant(20,[4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])); // 9