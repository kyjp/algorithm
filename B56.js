const checkStr = (input) => {
    const lines = input.trim().split('\n')
    const [N, Q] = lines[0].split(' ').map(Number)
    const S = lines[1]
    const BASE = 31
    const MOD = 1e9 + 7
    const power = new Array(N + 1).fill(1)
    const hash = new Array(N + 1).fill(0)
    const reverseHash = new Array(N + 1).fill(0)

    for(let i = 0; i < N; i++) {
        power[i + 1] = (power[i] * BASE) % MOD
        hash[i + 1] = (hash[i] * BASE + (S.charCodeAt(i) - 'a'.charCodeAt(0) + 1)) % MOD
        reverseHash[i + 1] = (reverseHash[i] * BASE + (S.charCodeAt(N - i - 1) - 'a'.charCodeAt(0) + 1)) % MOD
    }

    const getHash = (h, l, r) => {
        return (h[r + 1] - (h[l] * power[r - l + 1]) % MOD + MOD) % MOD
    }

    const results = []

    for(let i = 2; i < 2 + Q; i++) {
        const [L, R] = lines[i].split(' ').map(x => parseInt(x) - 1)
        const normalHash = getHash(hash, L , R)
        const reverseHashValue = getHash(reverseHash, N - R - 1, N - L - 1)
        if(normalHash === reverseHashValue) {
            results.push('Yes')
        } else {
            results.push('No')
        }
    }
    console.log(results.join('\n'))
}

const input = `7 3
abcbabc
1 3
0 6
2 4`;
solve(input)