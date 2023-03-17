const quickSort = (arr) => {
    const pivot = arr[arr.length - 1]
    let pivotArray = [pivot]
    let leftArray = []
    let rightArray = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            rightArray.push(arr[i])
        } else {
            leftArray.push(arr[i])
        }
    }
    if (rightArray.length == 0) {
        return leftArray.concat(pivotArray)
    }
    if (leftArray.length == 0) {
        return pivotArray.concat(rightArray)
    }
    return quickSort(leftArray).concat(pivotArray, quickSort(rightArray))
}

console.log(quickSort([-6, 20, 8, -2, 4]))
