const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  let answer = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      answer = false;
      return answer;
    }
  }
  return answer;
};

console.log(isPrime(10));
