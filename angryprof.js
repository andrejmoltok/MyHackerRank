// https://www.hackerrank.com/challenges/angry-professor/problem

// function angryProfessor(k, a) {
//     let count = 0;
//     a.forEach((v) => {if (v <= 0) {count++;}});
//     return count >= k ? 'NO' : 'YES'; 
// }

function angryProfessor(k, a) {
    // let count = 0;
    // for (let i = 0; i < a.length; i++) {if (a[i] <= 0) {count++;}};
    // return count >= k ? 'NO' : 'YES'; 
    return a.reduce((p,c,i,a) => {a[i] <= 0 ? p++ : p;return p;},0) >= k ? 'NO' : 'YES';
}

console.log(angryProfessor(3,[0, -1, 2, 1]));