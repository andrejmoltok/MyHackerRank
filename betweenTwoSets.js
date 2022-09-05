function getTotalX(a, b) {
    let count = 0;
    let aMax = Math.max(...a);
    let bMin = Math.min(...b);
    for (let i = aMax; i <= bMin; i++) {
      if (a.every((item) => i % item === 0) && b.every((item) => item % i === 0)) {
        count++;
      }
    }
    return count;
  }

console.log(getTotalX([2, 6],[24, 36]));