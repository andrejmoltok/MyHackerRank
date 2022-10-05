// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem

function designerPDFViewer(h, word) {
    // define variables
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letters = word.split('');
    let heights = [];
    // console.log(alphabet);

    // does a for loop over letters array to find
    // indices of letters inside the alphabet array
    // and push the corresponding values from `h` array
    // based on the previous indices
    letters.forEach((v) => { // letters.map(/*etc*/)
        let index = alphabet.indexOf(v);
        heights.push(h[index]);
    });
    // console.log(heights);

    // calculate the maximum height of `letter` from `letters`
    let height = Math.max(0,...heights);
    // console.log(height + " * 1 * " + word.length + " = " + height*1*word.length);

    // return the solution
    return height*1*word.length;
}

console.log(designerPDFViewer([1,3,1,3,1,4,1,3,2,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,7],"zaba"));