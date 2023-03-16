const binarySearch = (arr, t) => {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((rightIndex + leftIndex) / 2)
        if (arr[middleIndex] == t) {
            return middleIndex
        } else if (t > arr[middleIndex]) {
            leftIndex = middleIndex+1
        } else if (t < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        }
    }
    return -1
}
const array = [-5, 2, 4, 6, 10]
const t1 = 10
const t2 = 6
const t3 = 20

console.log(binarySearch(array, t1))
console.log(binarySearch(array, t2))
console.log(binarySearch(array, t3))
