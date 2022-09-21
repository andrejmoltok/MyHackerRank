// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
    let pages = [];
    let bookodd;
    let bookeven;
    let countUpEven = 0;
    let countDownEven = 0;
    let countUpOdd = 0;
    let countDownOdd = 0;
    //console.log("Flip to page",p);
    //console.log("Minimum pages needed to flip,");
    if (p == n-1) {
        return 0;
    } else if (p % 2 === 0) {
        for (bookeven = 0; bookeven < p; bookeven+=2) {
            countUpEven++;
            //console.log("counter up",countUpEven);
            //console.log("even pages",bookeven);
        }
        for (bookeven = n; bookeven > p; bookeven-=2) {
            countDownEven++;
            //console.log("counter down",countDownEven);
            //console.log("even pages",bookeven);
        }
        pages.push([countUpEven,countDownEven]);
        
    } else {
        for (bookodd = 1; bookodd < p; bookodd+=2) {
            countUpOdd++;
            console.log("counter up",countUpOdd);
            console.log("odd pages",bookodd);
        }
        for (bookodd = n; bookodd > p; bookodd-=2) {
            countDownOdd++;
            console.log("counter down",countDownOdd);
            console.log("odd pages",bookodd);
        }
        pages.push([countUpOdd,countDownOdd]);
    }
    return Math.min(...pages.flat());
}


console.log(pageCount(6,2));
console.log(pageCount(5,4));