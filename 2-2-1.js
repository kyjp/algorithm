// sequential search
// 線形探索とはランダムな配列の中から目的のデータをみつけるアルゴリズム

const sequentialSearch = (arr, target) => {
    let result = -1
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            result = i
            break
        }
    }
    return result
}

console.log(sequentialSearch([72, 68, 92, 88, 41, 53, 97, 84, 39, 55], 53))