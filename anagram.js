function makeAnagram(a,b) {
    let one = a.split('').sort().join('').split('');
    let two = b.split('').sort().join('').split('');;
    let count = 0;
    
    let filt1 = one.filter((letter) => !two.includes(letter));
    let filt2 = two.filter((letter) => !one.includes(letter));

    //filter out letters which are only in one of the arrays
    // for (let i = 0; i < filt1.length; i +=1) {
    // if (filt1 === filt2) {
    //     filt1.pop();
    //    } else {
    //     filt2.pop();
    //    }
    // } 
    console.log(filt1.join(''));
    console.log(filt2.join(''));
    // count = filt1.length + filt2.length;
    // return count;
}

console.log(makeAnagram('cdefe','abcde'));
console.log(makeAnagram('cde','dcf'));
console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));

// fcrxzwscanmligyxyvym
// jxwtrhvujlmrpdoqbisbwhmgpmeoke
