function high(x) {
    let score = 0;
    let final = 0;
    let arr = x.split(' ');
    let result = [];
    let diff = [];
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[i].length; j += 1) {
            if (alphabet.includes(arr[i][j])) {
                score = alphabet.indexOf(arr[i][j]) + 1;
                final += score;
            }
        }
        result.push(final);
    }
    diff.push(result[0]);
    for (let k = 0; k < result.length-1; k += 1) {
        diff.push(result[k+1] - result[k]);
    }
    let max = Math.max(...diff);
    return arr.filter((el,idx,a) => idx === diff.indexOf(max));
}

high('man i need a taxi up to ubud');