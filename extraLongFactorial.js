// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    function factorial(num) {
        if (num > 2) {
            return num * factorial(num - BigInt(1))
        }
        return num;
    }
    return factorial(BigInt(n)).toString();
}

console.log(extraLongFactorials(25));