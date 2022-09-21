// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    // Write your code here
    let roundedGrades = new Array();
    roundedGrades = [];
    for (let i = 0; i < grades.length; i += 1) {
        let rounded = Math.ceil(grades[i] / 5) * 5;
        if (grades[i] >= 38) {
            if (rounded - grades[i] < 3) {
                roundedGrades.push(rounded);
            } else {
                roundedGrades.push(grades[i]);
            }
        } else {
            roundedGrades.push(grades[i]);
        }
    }
    return roundedGrades;
}