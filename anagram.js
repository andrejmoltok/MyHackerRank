function makeAnagram(a,b) {
    
    let one = a.split('').sort().join('').split('');
    let two = b.split('').sort().join('').split('');
    console.log("first ",one);
    console.log("second ",two);
    let filter1 = one.filter((item) => !two.includes(item));
    let filter2 = two.filter((item2) => !one.includes(item2));
    console.log("filter1",filter1);
    console.log("filter2",filter2);
    let filter3 = filter1.filter((item) => filter2.includes(item));
    let filter4 = filter2.filter((item2) => filter1.includes(item2));
    console.log(filter3);
    console.log(filter4);
    let red = new Array();
    red = [];
    red.push(filter3,filter4);
    let blue = red.flat();
    console.log("final",blue);
    return blue.length;
}

console.log(makeAnagram('cdefefe','abcded'));
console.log(makeAnagram('cde','dcf'));
//console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));