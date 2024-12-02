// ユークリッド互除法
// 二つの整数の最大公約数を求める

const euclid = (a, b) => {
    if(a === b) {
        return a
    }
    if(Math.max(a, b) === a) {
        return euclid(b, a - b)
    }
    if(Math.max(a, b) === b) {
        return euclid(a, b - a)
    }
}

console.log(euclid(30, 50))