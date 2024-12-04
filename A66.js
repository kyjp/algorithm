const input = [
    ['3', '4'],
    ['1', '1', '2'],
    ['2', '1', '3'],
    ['1', '2', '3'],
    ['2', '2', '3']
]

const [N, Q] = input.shift().map(i => Number(i))

class UnionFind {
    constructor(n) {
        this.parent = []
        this.rank = []
        for(let i = 0; i < n; i++) {
            this.parent[i] = i
            this.rank[i] = 0
        }
    }

    find(x) {
        if(this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x])
        }
        return this.parent[x]
    }

    union(x, y) {
        const rootX = this.find(x)
        const rootY = this.find(y)
        if(rootX !== rootY) {
            if(this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX
            } else if(this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY
            } else {
                this.parent[rootY] = rootX
                this.rank[rootY] += 1
            }
        }
    }
    
    belong(x, y) {
        return this.find(x) === this.find(y)
    }
}

const tree = new UnionFind(N)

for(let i = 0; i < Q; i++) {
    const query = input[i].map(i => Number(i))
    if(query[0] === 1) {
        tree.union(query[1], query[2])
    }else{
        console.log(tree.belong(query[1], query[2]) ? "Yes" : "No")
    }
}