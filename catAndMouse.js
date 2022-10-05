// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
    if (Math.abs(z - y) === Math.abs(z - x)) {
        return `Mouse C`;
    } else if (Math.abs(z - y) < Math.abs(z - x)) {
        return `Cat B`;
    } else {
        return `Cat A`;
    }
}