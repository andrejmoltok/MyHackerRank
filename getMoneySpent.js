function getMoneySpent(keyboards, drives, b) {
    // define variables
    let sum = [];
    // addition of keyboards array elements to
    // drives array elements on-by-one
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            let val = (keyboards[i]+drives[j]);
            //store values in a new array
            sum.push(val);
        }
    }
    // return ha maximum amount which can be spent
    let exp = Math.max(...((sum.filter((elem) => (elem <= b)))));
    //console.log(exp);
    if (exp === -Infinity) {
        return -1;
    } else {
        return exp;
    }
}

console.log(getMoneySpent([3,1],[5,2,8],10));
console.log(getMoneySpent([4],[5],5));