function parseRGB(x) {
  const arr = x.split(',');
  const first = Number(arr[0].split('(')[1]);
  const sec = Number(arr[1]);
  const third = Number(arr[2].split(')')[0]);
  const toParse = [];
  toParse.push(first, sec, third);
  let hex = '#';
  for (let i = 0; i < toParse.length; i += 1) {
    if (Number(toParse[i].toString(16)) < 10) {
      hex += '0' + (toParse[i]).toString(16);
    } else {
      hex += (toParse[i]).toString(16);
    }
  }
    return hex;
}

console.log(parseRGB("RGB(167, 3, 54)"));