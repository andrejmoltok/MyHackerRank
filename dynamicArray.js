// NOT SOLVED YET //
// NOT SOLVED YET //
// NOT SOLVED YET //
function dynamicArray(n, queries = [[]]) {
    // Initialize arr[n][0]
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        arr.push(new Array());
    }

    // Initialize answers array
    let answers = new Array();

    // Apply queries
    let lastAnswer = 0;
    for (const query in queries) {
        let queryType = query[0];
        let x = query[1];
        let y = query[2];
        let idx = ((x ^ lastAnswer) % n);
        if(queryType == 1){
            arr[idx].push(y);    
        } else {
            lastAnswer = arr[idx][y % arr[idx].length];
            answers.push(lastAnswer);
        }
    }

    return answers;
}

console.log(dynamicArray(2,[['1','0','5'],['1','1','7'],['1','0','3'],['2','1','0'],['2','1','1']]));