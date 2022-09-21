function bonAppetit(bill:Array<number>, k:number, b:number) { 
    let totalShared = new Array();
    totalShared = [];
    for (let i = 0; i < bill.length; i++) {
        if (i == k) {
            continue;
        }
        totalShared.push(bill[i]);
    };
    // bill.forEach((v,i) => {if (i == k) {return};totalShared.push(bill[i])});
    let half = (totalShared.reduce((p,c) => p+c,0) / 2);
    return half == b ? "Bon Appetit" : b - half;
}

console.log(bonAppetit([3,10,2,9], 1, 12));