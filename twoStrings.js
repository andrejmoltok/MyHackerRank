function twoStrings(s1, s2) {
    let arr = s1.split('');
    let result = 'NO';
    arr.forEach((item) => {
        if (s2.indexOf(item) >= 0) {
            result = 'YES';
            return;
        }
    });
    return result;
}

console.log(twoStrings('art','and'));
console.log(twoStrings('be','cat'));
console.log(twoStrings('hello','world'));
console.log(twoStrings('jill','hill'));
