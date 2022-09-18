function miniMaxSum(arr) {
    // Write your code here
    let newArr = [];

    let sorted = arr.sort(function(a,b){return(a-b)});

    let minSum = sorted.slice(0,sorted.length-1).reduce((p,c) => p+c,0);
    let maxSum = sorted.slice(1,sorted.length).reduce((p,c) => p+c,0);
    
    newArr.push(minSum,maxSum);

    return newArr[0], newArr[1];
}

console.log(miniMaxSum([1,2,3,4,5]));
console.log(miniMaxSum([7, 69, 2, 221, 8974]));
console.log(miniMaxSum([5,5,5,5,5]));
