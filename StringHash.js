const input = [
    "7 3",
    "abcbabc",
    "1 3 5 7",
    "1 5 2 6",
    "1 2 6 7"
]

const [N, Q] = input[0].split(" ").map(i => Number(i))
const S = input[1]
const BASE = 31
const MOD = 1e9 + 7
const power = new Array(N + 1).fill(1)
const hash = new Array(N + 1).fill(0)

for(let i = 0; i < N; i++) {
    power[i + 1] = (power[i] * BASE) % MOD;
    hash[i + 1] = (hash[i] * BASE + (S.charCodeAt(i) - 'a'.charCodeAt(0) + 1)) % MOD
}

const getHash = (l, r) => {
    return (hash[r + 1] - (hash[l] * power[r - l + 1]) % MOD + MOD) % MOD
}

const results = []

for(let i = 2; i < 2 + Q; i++) {
    const [a, b, c, d] = input[i].split(" ").map(x => parseInt(x) - 1)
    if(getHash(a, b) === getHash(c, d)) {
        results.push("Yes")
    } else {
        results.push("No")
    }
}

console.log(results.join('\n'))

