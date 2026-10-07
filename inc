function num(n) {
    return n+1;
}
const a=5;
const b=num(a);

console.log("Число:");
console.log("a =", a);
console.log("b =", b);

function incObject(ch) {
    ch.n = ch.n + 1;
}

const obj = { n: 5 };
incObject(obj);

console.log("Об'єкт:");
console.log(obj);
