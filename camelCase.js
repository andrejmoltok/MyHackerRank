function camelcase(s) {
    // Write your code here
    // start counting from 1, because every string in camelcase 
    // starts with a lowercase letter
    let count = 1;
    // iterate over the input string
    for (let i = 0; i < s.length; i += 1) {
        // check if the current letter is upper, if so add to count 1 
        // until it loops to the end of the input string
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            count += 1;
        }
    }
    // return the result
    return count;
}

console.log(camelcase("saveChangesInTheEditor"));