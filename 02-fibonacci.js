const fibonacci = (n) => {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    let newNumber = fib[i - 1] + fib[i - 2];
    fib.push(newNumber);
  }
  return fib;
};

console.log(fibonacci(7));
