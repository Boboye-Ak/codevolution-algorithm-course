const factorial = (n) => {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer = answer * i;
  }
  return answer;
};

console.log(factorial(5));
