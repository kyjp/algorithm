const array = Array(64).fill(0).map((_, i) => i + 1)

const N = 65

const binarySearch = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while ( left <= right) {
        const mid = Math.floor((left + right) / 2)
        if(arr[mid] === target) return 'みつけた'
        if(target < arr[mid]) {
            right = mid - 1
            continue
        }
        left = mid + 1
    }
    return 'みつからない'
}

console.log(binarySearch(array, N))