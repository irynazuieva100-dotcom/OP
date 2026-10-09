function range(m, n) {
    const mas = [];

    for (let i=m; i<=n; i++) {
        mas.push(i);
    }
    return mas;
}

function range2(m, n) {
    const mas = [];

    for (let i=m; i<=n; i++) {
        if (i%2 !== 0) {
            mas.push(i);
        }
    }

    return mas;
}

console.log("Усі числа:");
console.log(range(15, 30));

console.log("Непарні числа:");
console.log(range2(15, 30));
