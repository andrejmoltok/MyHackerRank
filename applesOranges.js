function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    // s & t = house distance
    // a & b = location of trees
    // m & n = number of fallen fruits, length of apples & oranges arrays
    // apples, oranges = positions where the fruits have fallen
    let fallenApple = [];
    
    let fallenOrange = [];
    
    for (let i = 0; i < apples.length; i += 1) {
        let distApple = a + apples[i];
        fallenApple.push(distApple);
    }

    //apples.forEach((item) => fallenApple.push(a + item));
    
    for (let j = 0; j < oranges.length; j += 1) {
        let distOrange = b + oranges[j];
        fallenOrange.push(distOrange);
    }

    //oranges.forEach((item) => fallenOrange.push(b + item));

    let apple = fallenApple.map(x => {if (x >= s && x <= t) {return x;}}).filter((elem) => Number(elem));

    let orange = fallenOrange.map(x => {if (x >= s && x <= t) {return x;}}).filter((elem) => Number(elem));
    
    console.log(apple.length + '\n' + orange.length);

}

countApplesAndOranges(7,10,5,15,[-2,2,1],[5,-6]);