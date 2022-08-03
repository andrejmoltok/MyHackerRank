function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    arr.forEach(element => {
        if (Math.sign(element) === 1) {
            pos++;
        } else if (Math.sign(element) === -1) {
            neg++;
        } else {
            zero++;
        }
    });
    console.log((pos/arr.length).toPrecision(6) + '\n' + (neg/arr.length).toPrecision(6) + '\n' + (zero/arr.length).toPrecision(6));
}

plusMinus([1,1,0,-1,-1]);