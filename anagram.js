function makeAnagram(a,b) {
    let one = a.split('').sort().join('').split('');
    let two = b.split('').sort().join('').split('');
    let count = 0;
    
    let filt1 = one.filter((letter) => !two.includes(letter));
    let filt2 = two.filter((letter) => !one.includes(letter));
    count = filt1.length + filt2.length;
    return count;
}

console.log(makeAnagram('cdefe','abcde'));
console.log(makeAnagram('cde','dcf'));
//console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));