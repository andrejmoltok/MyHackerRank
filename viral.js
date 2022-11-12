function viralAdvertising(n) {
    let recep = 5;
     
    let shared = Math.floor(recep/2);
    let liked = shared*3;
    let cumul = 0;
    if (n > 1) {
        recep = liked;
        shared = ;
        cumul += shared;
        console.log(recep,shared,cumul);
        return viralAdvertising(n-1);
    }
    
}

console.log(viralAdvertising(2));