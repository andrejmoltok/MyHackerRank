function parseRGB(x) {
    let arr = x.split(',');
    let first = Number(arr[0].split('(')[1]);
    let sec = Number(arr[1]);
    let third = Number(arr[2].split(')')[0]);
    let toParse = [];
    toParse.push(first,sec,third);
    let hex = '#';
    for (let i = 0; i < toParse.length; i += 1) {
        if (toParse[i].toString(10) !== Number.isNaN(toParse[i])) {
            hex += (toParse[i]).toString(16);
        }
    }
    return hex;
}

console.log(parseRGB("RGB(167,39,54)"));