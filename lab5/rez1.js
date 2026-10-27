function seq(...fns) {
    function next(value) {
        if (typeof value === 'function') {
            fns.push(value);
            return next;
        }
        if (typeof value !== 'number') throw new TypeError('Expected number');

        let res = value;
        for (let i=fns.length-1; i>=0; i--) {
            res = fns[i](res);
        }
        return res;
    }
    return next;
}

console.log(seq(x => x + 7)(x => x * 2)(5));
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));

