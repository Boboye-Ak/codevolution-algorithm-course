const linearSearch = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([1, 2, 4, 7, 3, 5], 11))
