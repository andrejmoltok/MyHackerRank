function bonAppetit(bill, k, b) {
    var totalShared = new Array();
    totalShared = [];
    for (var i = 0; i < bill.length; i++) {
        if (i == k) {
            continue;
        }
        totalShared.push(bill[i]);
    }
    var half = (totalShared.reduce(function (p, c) { return p + c; }, 0) / 2);
    return half == b ? "Bon Appetit" : b- half;
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12));
