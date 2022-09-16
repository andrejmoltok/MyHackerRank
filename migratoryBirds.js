function migratoryBirds(arr) {
    let ar = [...Array(6).fill(0)];
    //arr.forEach((v) => ar[v] += 1); //SOLUTION 1
    //arr.reduce((p,v) => ar[v]++,ar); //SOLUTION 2
    //ar = arr.reduce(function(p,v) {p[v]++,return p},ar); //SOLUTION 3
    console.log(ar);
    return ar.findIndex((v) => v == Math.max(...ar));
}

console.log(migratoryBirds([1,4,4,4,5,3]));

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));