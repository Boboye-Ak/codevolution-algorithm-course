const recursiveBinarySearch = (arr, t) => {
    const search = (leftIndex, rightIndex, array) => {
        while (leftIndex <= rightIndex) {
            let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
            if (t == array[middleIndex]) {
                return middleIndex
            } else if (t < array[middleIndex]) {
                return search(leftIndex, rightIndex - 1, array)
            } else if (t > array[middleIndex]) {
                return search(middleIndex + 1, rightIndex, array)
            }
        }
        return -1
    }

    return search(0, arr.length - 1, arr)
}

const array = [-5, 2, 4, 6, 10]
const t1 = 10
const t2 = 6
const t3 = 20

console.log(recursiveBinarySearch(array, t1))
console.log(recursiveBinarySearch(array, t2))
console.log(recursiveBinarySearch(array, t3))
