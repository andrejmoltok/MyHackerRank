// https://www.hackerrank.com/challenges/picking-numbers/problem

// function pickingNumbers(a) {
//     let min = Number.MIN_VALUE;
//     for (let i = 0; i < a.length-1; i++) {
//         let count = 0;
//         for (let j = 0; j < a.length; j++) {
//             if (a[i] - a[j] == 0 || a[i] - a[j] == 1) {
//                 count++;
//             }
//             if (count >= num) {
//                 num = count;
//             }
//         }
//     }
//     return num;
// }

function pickingNumbers(arr) {
const max = arr.reduce(
    ([obj, max], current, i) => {
      if (!obj.hasOwnProperty(current)) {
        obj[current] = arr
          .reduce(
            (a, b) => a + (b === current || b === current + 1),
            0
          )
      }
      return [obj, Math.max(max, obj[current])]
    },
    [{}, 0]
  )[1];
  return max;
}


console.log(pickingNumbers([1,1,2,2,4,4,5,5,5]));
console.log(pickingNumbers([4,5,6,3,3,1]));
console.log(pickingNumbers([1,2,2,3,1,2]));