const cartesianProduct = (arr1, arr2) => {
    let answer = []
    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i]
        for (let j = 0; j < arr2.length; j++) {
            let b = arr2[j]
            answer.push([a, b])
        }
    }
    return answer
}


console.log(cartesianProduct([1,2],[3,4,5]))
