function sum(...args) {
    let s = 0;
    for (const n of args) {
        s += n;
    }
    return s;
}

console.log(sum(1, 2, 3));
console.log(sum(0));
console.log(sum());
console.log(sum(1, -1, 1));
console.log(sum(10, -1, -1, -1));
