# Algorithms and Data Structures

Implementations of popular algorithms and data structures. Following the example of [trekhleb](https://github.com/trekhleb/javascript-algorithms).
## Data Structures
- [x]  [Linked List](src/data-structures/linked-list)
- [x]  [Doubly Linked List](src/data-structures/doubly-linked-list)
- [x]  [Queue](src/data-structures/queue)
- [x]  [Stack](src/data-structures/stack)
- [ ]  [Hash Table](src/data-structures/hash-table)
- [ ]  [Heap](src/data-structures/heap) - max and min heap versions
- [ ]  [Priority Queue](src/data-structures/priority-queue)
- [ ]  [Trie](src/data-structures/trie)
- [x]  [Binary Search Tree](src/data-structures/binary-search-tree)
- [ ]  [AVL Tree](src/data-structures/tree/avl-tree)
- [ ]  [Red-Black Tree](src/data-structures/tree/red-black-tree)
- [ ]  [Segment Tree](src/data-structures/tree/segment-tree) - with min/max/sum range queries examples
- [ ]  [Fenwick Tree](src/data-structures/tree/fenwick-tree) (Binary Indexed Tree)
- [ ]  [Graph](src/data-structures/graph) (both directed and undirected)
- [ ]  [Disjoint Set](src/data-structures/disjoint-set)
- [ ]  [Bloom Filter](src/data-structures/bloom-filter)

## Algorithms

### Algorithms by Topic

* **Math**
- [ ]  [Bit Manipulation](src/algorithms/math/bits) - set/get/update/clear bits, multiplication/division by two, make negative etc.
- [x]  [Factorial](src/algorithms/math/factorial) 
- [x]  [Fibonacci Number](src/algorithms/math/fibonacci) - classic and closed-form versions
- [x]  [Primality Test](src/algorithms/math/primality-test) (trial division method)
- [x]  [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
- [x]  [Least Common Multiple](src/algorithms/math/least-common-multiple)
- [x]  [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - finding all prime numbers up to any given limit
- [ ]  [Is Power of Two](src/algorithms/math/is-power-of-two) - check if the number is power of two (naive and bitwise algorithms)
- [ ]  [Pascal's Triangle](src/algorithms/math/pascal-triangle)
- [ ]  [Complex Number](src/algorithms/math/complex-number) - complex numbers and basic operations with them
- [ ]  [Radian & Degree](src/algorithms/math/radian) - radians to degree and backwards conversion
- [ ]  [Fast Powering](src/algorithms/math/fast-powering)
- [ ]  [Integer Partition](src/algorithms/math/integer-partition)
- [ ]  [Square Root](src/algorithms/math/square-root) - Newton's method
- [ ]  [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - approximate π calculations based on N-gons
- [ ]  [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up 
* **Sets**
- [ ]  [Cartesian Product](src/algorithms/sets/cartesian-product) - product of multiple sets
- [x]  [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - random permutation of a finite sequence
- [ ]  [Power Set](src/algorithms/sets/power-set) - all subsets of a set (bitwise and backtracking solutions)
- [ ]  [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
- [ ]  [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
- [ ]  [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
- [ ]  [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
- [ ]  [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
- [ ]  [Knapsack Problem](src/algorithms/sets/knapsack-problem) - "0/1" and "Unbound" ones
- [ ]  [Maximum Subarray](src/algorithms/sets/maximum-subarray) - "Brute Force" and "Dynamic Programming" (Kadane's) versions
- [ ]  [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Strings**
- [x]  [Hamming Distance](src/algorithms/string/hamming-distance) - number of positions at which the symbols are different
- [ ]  [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
- [ ]  [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (KMP Algorithm) - substring search (pattern matching)
- [ ]  [Z Algorithm](src/algorithms/string/z-algorithm) - substring search (pattern matching)
- [ ]  [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - substring search
- [ ]  [Longest Common Substring](src/algorithms/string/longest-common-substring)
- [ ]  [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Searches**
- [x]  [Linear Search](src/algorithms/search/linear-search)
- [ ]  [Jump Search](src/algorithms/search/jump-search) (or Block Search) - search in sorted array
- [x]  [Binary Search](src/algorithms/search/binary-search) - search in sorted array
- [ ]  [Interpolation Search](src/algorithms/search/interpolation-search) - search in uniformly distributed sorted array
* **Sorting**
- [ ]  [Bubble Sort](src/algorithms/sorting/bubble-sort)
- [ ]  [Selection Sort](src/algorithms/sorting/selection-sort)
- [ ]  [Insertion Sort](src/algorithms/sorting/insertion-sort)
- [ ]  [Heap Sort](src/algorithms/sorting/heap-sort)
- [ ]  [Merge Sort](src/algorithms/sorting/merge-sort)
- [ ]  [Quicksort](src/algorithms/sorting/quick-sort) - in-place and non-in-place implementations
- [ ]  [Shellsort](src/algorithms/sorting/shell-sort)
- [ ]  [Counting Sort](src/algorithms/sorting/counting-sort)
- [ ]  [Radix Sort](src/algorithms/sorting/radix-sort)
* **Linked Lists**
- [ ]  [Straight Traversal](src/algorithms/linked-list/traversal)
- [ ]  [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Trees**
- [ ]  [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
- [ ]  [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Graphs**
- [ ]  [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
- [ ]  [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
- [ ]  [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
- [ ]  [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest paths to all graph vertices from single vertex
- [ ]  [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest paths to all graph vertices from single vertex
- [ ]  [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
- [ ]  [Detect Cycle](src/algorithms/graph/detect-cycle) - for both directed and undirected graphs (DFS and Disjoint Set based versions)
- [ ]  [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
- [ ]  [Topological Sorting](src/algorithms/graph/topological-sorting) - DFS method
- [ ]  [Articulation Points](src/algorithms/graph/articulation-points) - Tarjan's algorithm (DFS based)
- [ ]  [Bridges](src/algorithms/graph/bridges) - DFS based algorithm
- [ ]  [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - Fleury's algorithm - Visit every edge exactly once
- [ ]  [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
- [ ]  [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - Kosaraju's algorithm
- [ ]  [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
* **Cryptography**
- [ ]  [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - rolling hash function based on polynomial
- [ ]  [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) - simple substitution cipher
* **Machine Learning**
- [ ]  [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 simple JS functions that illustrate how machines can actually learn (forward/backward propagation)
* **Uncategorized**
- [ ]  [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
- [ ]  [Square Matrix Rotation](src/algorithms/uncategorized/square-matrix-rotation) - in-place algorithm
- [ ]  [Jump Game](src/algorithms/uncategorized/jump-game) - backtracking, dynamic programming (top-down + bottom-up) and greedy examples 
- [ ]  [Unique Paths](src/algorithms/uncategorized/unique-paths) - backtracking, dynamic programming and Pascal's Triangle based examples 
- [ ]  [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem (dynamic programming and brute force versions)
- [ ]  [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top (4 solutions)
- [ ]  [N-Queens Problem](src/algorithms/uncategorized/n-queens)
- [ ]  [Knight's Tour](src/algorithms/uncategorized/knight-tour)

### Algorithms by Paradigm

* **Brute Force**
- [x]  [Linear Search](src/algorithms/search/linear-search)
- [ ]  [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
- [ ]  [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
- [ ]  [Maximum Subarray](src/algorithms/sets/maximum-subarray)
- [ ]  [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - shortest possible route that visits each city and returns to the origin city
- [ ]  [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - decompose a function of time (a signal) into the frequencies that make it up
* **Greedy**
- [ ]  [Jump Game](src/algorithms/uncategorized/jump-game)
- [ ]  [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
- [ ]  [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - finding shortest path to all graph vertices
- [ ]  [Prim’s Algorithm](src/algorithms/graph/prim) - finding Minimum Spanning Tree (MST) for weighted undirected graph
- [ ]  [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - finding Minimum Spanning Tree (MST) for weighted undirected graph
* **Divide and Conquer**
- [ ]  [Binary Search](src/algorithms/search/binary-search)
- [ ]  [Tower of Hanoi](src/algorithms/uncategorized/hanoi-tower)
- [ ]  [Pascal's Triangle](src/algorithms/math/pascal-triangle)
- [ ]  [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - calculate the Greatest Common Divisor (GCD)
- [ ]  [Merge Sort](src/algorithms/sorting/merge-sort)
- [ ]  [Quicksort](src/algorithms/sorting/quick-sort)
- [ ]  [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
- [ ]  [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
- [ ]  [Jump Game](src/algorithms/uncategorized/jump-game)
- [ ]  [Fast Powering](src/algorithms/math/fast-powering)
- [ ]  [Permutations](src/algorithms/sets/permutations) (with and without repetitions)
- [ ]  [Combinations](src/algorithms/sets/combinations) (with and without repetitions)
* **Dynamic Programming** 
- [x]  [Fibonacci Number](src/algorithms/math/fibonacci)
- [ ]  [Jump Game](src/algorithms/uncategorized/jump-game)
- [ ]  [Unique Paths](src/algorithms/uncategorized/unique-paths)
- [ ]  [Rain Terraces](src/algorithms/uncategorized/rain-terraces) - trapping rain water problem
- [ ]  [Recursive Staircase](src/algorithms/uncategorized/recursive-staircase) - count the number of ways to reach to the top
- [ ]  [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - minimum edit distance between two sequences
- [ ]  [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
- [ ]  [Longest Common Substring](src/algorithms/string/longest-common-substring)
- [ ]  [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
- [ ]  [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
- [ ]  [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
- [ ]  [Integer Partition](src/algorithms/math/integer-partition)
- [ ]  [Maximum Subarray](src/algorithms/sets/maximum-subarray)
- [ ]  [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - finding shortest path to all graph vertices
- [ ]  [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) - find shortest paths between all pairs of vertices
- [ ]  [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Backtracking** 
- [ ]  [Jump Game](src/algorithms/uncategorized/jump-game)
- [ ]  [Unique Paths](src/algorithms/uncategorized/unique-paths)
- [ ]  [Power Set](src/algorithms/sets/power-set) - all subsets of a set
- [ ]  [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Visit every vertex exactly once
- [ ]  [N-Queens Problem](src/algorithms/uncategorized/n-queens)
- [ ]  [Knight's Tour](src/algorithms/uncategorized/knight-tour)
- [ ]  [Combination Sum](src/algorithms/sets/combination-sum) - find all combinations that form specific sum
* **Branch & Bound**

## Project Setup

**Install dependencies**
```
npm install
```

**Run ESLint**

```
npm run lint
```

**Run tests**
```
npm test
```
