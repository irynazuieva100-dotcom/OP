function compose(...fns) {
    const handlers = [];

    function f(x) {
        try {
            let res = x;
            for (let i=fns.length-1; i>=0; i--) {
                res = fns[i](res);
            }
            return res;
        } catch (e) {
            for (const handler of handlers) {
                handler(e);
            }
            return undefined;
        }
    }

    f.on = function(event, handler) {
        if (event === 'error') handlers.push(handler);
        return f;
    };

    return f;
}

const twice = x => x * 2;
const check = x => {
    if (x < 0) throw new Error('Negative number');
    return x + 1;
};

const f = compose(twice, check);
f.on('error', e => console.log(e.message));

console.log(f(5));
console.log(f(-5));

