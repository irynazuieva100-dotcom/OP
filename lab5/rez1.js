function seq(...fns) {
    function next(x) {
        if (typeof x === 'number') {
            for (let i=fns.length-1; i>=0; i--) {
                x = fns[i](x);
            }
            return x;
        }
        fns.push(x);
        return next;
    }
    return next;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));
