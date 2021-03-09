class DisjointSet {
  constructor(n) {
    this.parent = Array.from({length: n}, (_, i)=> i+1);
  }
  find(u){
    if(u === this.parent[u]) return u;
    return this.find(this.parent[u]);
  }
  union(u, v){
    u = this.find(u);
    v = this.find(v);

    if(u === v) return;
    this.parent[u] = v;
  }
}