function matchingStrings(strings, queries /*string array inputs*/) {
    // initialize result array
    let result = [];

    // initiaize count variable and match the queries with the strings
    for (let i = 0; i < queries.length; i += 1) {
        let count = 0;
            for (let j = 0; j < strings.length; j += 1) {
                if ((queries[i] == strings[j])) {
                    count +=1;
                }
            }
        result.push(count);
    }
    
    // return the values in result array
    return result;
}

console.log(matchingStrings(['ab','ab','abc'],['ab','abc','bc']));