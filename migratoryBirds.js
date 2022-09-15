function migratoryBirds(arr) {
    let ar = [...Array(6).fill(0)];
    console.log(ar);
    arr.forEach((v) => ar[v] += 1);
    console.log(ar);
    return ar.findIndex((v) => v == Math.max(...ar));
}

console.log(migratoryBirds([1,4,4,4,5,3]));

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));