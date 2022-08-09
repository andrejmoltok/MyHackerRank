/* NOT SOLVED YET */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789".split('').map(function(item) {return Number.parseInt(item, 10)});
    const lower_case = "abcdefghijklmnopqrstuvwxyz".split('');
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const special_characters = "!@#$%^&*()-+".split('');
    let numCount = 0;
    let lowerCount = 0;
    let upperCount = 0;
    let specCount = 0;
    let min = 0;
    for (let i = 0; i < password.length; i += 1) {
        let ch = password.charAt(i);
        if ((ch >= 0 && ch <= 9)) {
            numCount += 1;
        } else if (ch >='a' && ch <= 'z') { //
            lowerCount += 1;
        } else if (ch >= 'A' && ch <= 'Z') {
            upperCount += 1;
        } else {
            specCount += 1;
        }
    }
    if (n < 6) {
        min = 6 - n;
        min;
    } else if (lowerCount === 0 || numCount === 0 || upperCount === 0 || specCount === 0) {
        min = 1;
    }
    return min;
}

console.log(minimumNumber(3,"Ab1"));

console.log(minimumNumber(11,"#HackerRank"));

console.log(minimumNumber(100,"A**U&UDJ(LWL*OBCFD!%+BCKJ(%)FD)%!Q^GW!)Q$^&Z#-H-%)D+XD&#RU-)FK#FW)T(B*U$!-S&D@%*$)BBMTEJ%^KR!$$FACHR"));


// console.log("has lower",lowerCount);
    // console.log("has num",numCount);
    // console.log("has upper",upperCount);
    // console.log("has special",specCount);
    //console.log('has at least one nummber');
    //console.log('containes lowercase letters.');
    //console.log('contains uppercase letter.');
    //console.log('contains special characters.');