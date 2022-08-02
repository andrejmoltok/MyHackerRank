function makeAnagram(a,b) {
    
    let one = a.split('').sort().join('').split('');
    let two = b.split('').sort().join('').split('');
    console.log("first ",one);
    console.log("second ",two);
    //put identical letters into new array
    // let three = one.concat(two);
    // let arr = new Array();
    // arr = [];
    // for (let i = 0; i < three.length; i  += 1) {
    //     if (one[i] === two[i]) {
    //         arr.push(one[i]);
    //     }
    // }
    // console.log(arr);
    // let filter1 = one.filter((item) => !two.includes(item));
    // let filter2 = two.filter((item2) => !one.includes(item2));
    // console.log("filter1",filter1);
    // console.log("filter2",filter2);
    // let three = one.concat(two);
    
    // let red = new Array();
    // red = [];
    // red.push(filter1,filter2);
    // let blue = red.flat();
    // console.log("final",blue);
    // return blue.length;
    //console.log(one);
    //console.log(two);
}

console.log(makeAnagram('cdefefe','abcded'));
//console.log(makeAnagram('cde','dcf'));
//console.log(makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke'));