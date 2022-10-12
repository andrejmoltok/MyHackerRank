// https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
    let count = 0;
    a.forEach((v) => {if (v <= 0) {count++;}});
    return count >= k ? 'NO' : 'YES'; 
}

console.log(angryProfessor(2,[0, -1, 2, 1]));