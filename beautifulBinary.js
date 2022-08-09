function beBinary(s) {
    const b = "010";
    let arr = s.match(/.{010}/g);
    console.log(arr);
}

beBinary('0100101010');