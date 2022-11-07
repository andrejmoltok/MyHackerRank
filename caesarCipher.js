// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

// function caesarCipher(s, k) {
//     // s - input string
//     // k - rotation factor
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
//     let upperAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
//     let arr1 = alphabet.split('');
//     let arr2 = upperAlpha.split('');
//     for (let i = 1; i <= k; i++) {
//         let rem1 = arr1.shift();
//         let rem2 = arr2.shift();
//         arr1.push(rem1);
//         arr2.push(rem2);
//     }
//     //console.log(s.split(''));
//     let rotated_lower = arr1.join('');
//     let rotated_upper = arr2.join('');
//     let output = "";
//     s.split('').forEach((v) => {
//         output += rotated_lower[alphabet.indexOf(v)]; 
//         if (v == "-") {output += "-"};
//         if (v == v.toUpperCase()) {output += rotated_upper[upperAlpha.indexOf(v)]};
//     });
//     return output;
// }

// console.log(caesarCipher("alpha-alpha", 5));
// console.log(caesarCipher("middle-Outz", 2));

const re = /[A-Za-z]/;
//console.log(re.test('s'));
//65-90
//97-122

function cipher(s, k) {
    var ret = s.split('').reduce(function(p, e) {
        if (re.test(e)) {
            var i = e.charCodeAt(0);
            var t = (i + k);
            t = t > 122 && i >= 97 && i <= 122 ? (t-96)%26+96: t;
            t = t > 90 && i >= 65 && i <= 90 ? (t-64)%26+64: t;
            p+= String.fromCharCode(t);
            return p;
        } else {
            p += e;
            return p;
        }
    }, "");
    return ret;
}

console.log(cipher('Alm.afazZ', 80)); //3 x 26 + 2
console.log(cipher('Alm.afazZ', 28)); //1 x 26 + 2
console.log(cipher('Alm.afazZ', 2)); //2