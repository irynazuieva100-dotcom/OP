function max(matrix) {
    let m = -Infinity;
    for (const row of matrix) {
        for (const n of row) {
            if (n > m) m = n;
        }
    }
    return m;
}

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(max([[-8, -3], [-5, -1]]));

