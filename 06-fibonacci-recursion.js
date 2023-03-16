const fibonacci = (n) => {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    let answer = fibonacci(n - 1) + fibonacci(n - 2)
    return answer
}

console.log(fibonacci(8))
