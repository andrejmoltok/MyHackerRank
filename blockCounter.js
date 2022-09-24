function blockCounter(x) {
  if (x == 1) {
    return 1;
  } else if (x > 1) {
    return x + blockCounter(x-1);
  }
}

console.log("You have",blockCounter(15),"blocks in the staircase.");