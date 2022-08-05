function lonelyInteger(arr) {
    let sorted = arr.sort(function(a,b) {return (a-b)});
    let double = sorted.filter((elem, idx, a) => a.indexOf(elem) !== idx);
    return Number(sorted.filter(elem => !double.includes(elem)));
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));
