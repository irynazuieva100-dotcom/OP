function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('Expected function');
        }
    }

    return function(x) {
        let res = x;
        for (const fn of fns) {
            res = fn(res);
        }
        return res;
    };
}

const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5));
console.log(pipe(inc, inc)(7));
