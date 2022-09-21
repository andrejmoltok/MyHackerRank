// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConv(s) {
    let hour = s.substring(0,2);
    let format = s.substring(2,8);
    let last = s.substring(8,10);
    if (hour === String(12) && last === "AM") {
        return "00" + format;
    } else if (hour === String(12) && last === "PM") {
        return hour + format;
    } else if (hour < String(12) && last === "PM") {
        return (12 + Number(hour) + format);
    } else if (hour < 10) {
        return (hour + format);
    }
}

console.log(timeConv('07:05:45AM'));
console.log(timeConv('07:05:45PM'));
console.log(timeConv("12:40:22AM"));