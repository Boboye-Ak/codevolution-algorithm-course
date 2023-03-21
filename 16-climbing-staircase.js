const climbingStaircase = (n) => {
    let array = [0, 1, 2]
    for (let i = 3; i <= n; i++) {
        let newNumber = array[i - 1] + array[i - 2]
        array.push(newNumber)
    }
    return array[n]
}

console.log(climbingStaircase(5))
