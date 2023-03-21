const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > nti) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = nti
    }
    return arr
}

console.log(insertSort([-6, 20, 8, -2, 4]))
