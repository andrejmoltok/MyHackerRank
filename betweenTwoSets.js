//NOT SOLVED YET

function LCM(one,two) {
    // return the least common multiple of two numbers 
    // with the help of Greatest Common Divisor function
    function GCD(big,small){
        //use Math.abs() with input to convert negative umbers into positive numbers
        if (big < 0 || small < 0){
            console.log("Negative numbers converted to positive and called the function. ");
            return GCD(Math.abs(big),Math.abs(small));
        }
        //last call of recursion returns this value
        else if (big == small){
            return big;
        }
        //mid-case
        else if(big < small){
            return GCD(big, small - big); 
        }
        //recursion itself
        else
        {
            return GCD(big - small,small);
        }
    }
    return (two * (a / GCD(one,two)));
}



function getTotal(a,b) {
    let first = [];
    for (let i = 0; i < a.length; i += 1 ) {
        let data = LCM(a[i],a[i+1]);
        first.push(data);
    }
    return first;
}

console.log(getTotal([2,4],[16,32,96]));
