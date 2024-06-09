// https://www.hackerrank.com/challenges/marcs-cakewalk/

function marcsCakewalk(calorie) {
  // let sorted = calorie.sort((a, b) => b - a);
  // let result = 0;
  // for (let i = 0; i < sorted.length; i++) {
  //   //console.log("power", Math.pow(2, i), "index", i);
  //   result += Math.pow(2, i) * sorted[i];
  //   //console.log(result);
  // }
  // return result;
  return calorie
    .sort((a, b) => b - a)
    .reduce((p, c, i) => {
      return (p += Math.pow(2, i) * c);
    }, 0);
}

console.log(marcsCakewalk([5, 10, 7]));
