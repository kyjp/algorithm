class UnionFind {
    constructor(n) {
      // 各人が誰とつながっているか（親ノードを管理）
      this.parent = [];
      // 各人のグループのサイズを管理（ランク）
      this.rank = [];
  
      // 初期化: 各人は自分自身が親で、ランクは0
      for (let i = 0; i < n; i++) {
        this.parent[i] = i; // 初めは各人が親
        this.rank[i] = 0;    // 初めはランク0
      }
    }
  
    // `x`の親を見つける（どのグループに属しているか）
    find(x) {
      if (this.parent[x] !== x) {
        // 親が自分でない場合、親を再帰的に探し、経路圧縮を行う
        this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
    }
  
    // 2人を同じグループに統合する
    union(x, y) {
      const rootX = this.find(x); // xのグループの代表者を探す
      const rootY = this.find(y); // yのグループの代表者を探す
  
      if (rootX !== rootY) {
        // 代表者が異なる場合、統合する
        if (this.rank[rootX] > this.rank[rootY]) {
          this.parent[rootY] = rootX; // 小さい木を大きい木に統合
        } else if (this.rank[rootX] < this.rank[rootY]) {
          this.parent[rootX] = rootY; // 小さい木を大きい木に統合
        } else {
          this.parent[rootY] = rootX; // 同じランクの場合、どちらでもよい
          this.rank[rootX] += 1; // 統合した際にランクを1つ増やす
        }
      }
    }
  
    // 2人が同じグループに属しているか確認する
    areFriends(x, y) {
      return this.find(x) === this.find(y); // 親が同じかどうかを確認
    }
  }
  
  // 使用例: 5人の友達がいる場合
  const friends = new UnionFind(5);
  
  // 1番と2番は友達になった
  friends.union(1, 2);
  
  // 2番と3番は友達になった
  friends.union(2, 3);
  
  // 1番と3番は同じグループにいるか確認
  console.log(friends.areFriends(1, 3)); // true: 同じグループ
  
  // 4番と5番はまだ友達ではない
  console.log(friends.areFriends(4, 5)); // false: 同じグループではない
  
  // 4番と5番を友達にする
  friends.union(4, 5);
  
  // 4番と5番が同じグループにいるか確認
  console.log(friends.areFriends(4, 5)); // true: 同じグループ