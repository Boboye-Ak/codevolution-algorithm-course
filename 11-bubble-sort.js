const bubbleSort = (arr) => {
    let numSwaps = 0
    let array = arr.slice(0)

    do {
        numSwaps = 0
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                let leftNumber = array[i - 1]
                let rightNumber = array[i]
                array[i - 1] = rightNumber
                array[i] = leftNumber
                numSwaps++
            }
        }
    } while (numSwaps > 0)

    return array
}

console.log(bubbleSort([-6, 20, 8, -2, 4]))
