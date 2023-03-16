const isPowerOf2 = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    let latestPower = 2 ** i;
    if (latestPower == n) {
      return true;
    } else if (latestPower > n) {
      return false;
    }
  }
};

console.log(isPowerOf2(1024));
