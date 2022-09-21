// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
    let output = "";

    let days = 0;

    let dayOfProg = 256;

    let months = [31,28,31,30,31,30,31,31];
    
    if (year > 1918 && (year % 4 === 0 && !(year % 100 === 0) || year % 400 === 0)) {
        months[1] = 29;
        days = months.reduce((p,c) => p+c,0);
        output += (dayOfProg - days) + ".09." + year;
        return output;
    } else if (year < 1918 && year % 4 === 0) {
        months[1] = 29;
        days = months.reduce((p,c) => p+c,0);
        output += (dayOfProg - days) + ".09." + year;
        return output;
    } else if (year < 1918 || year > 1918) {
        days = months.reduce((p,c) => p+c,0);
        output += (dayOfProg - days) + ".09." + year;
        return output;
    } else if (year == 1918) {
        days = months.reduce((p,c) => p+c,0);
        output += ((dayOfProg - days) + 13).toString() + ".09." + year;
        return output;
    }
}

console.log(dayOfProgrammer(1984));
console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(1918));