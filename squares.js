function squares(a,b) {
    return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

console.log(squares(3,9));
console.log(squares(17,24));
console.log(squares(100,1000));
