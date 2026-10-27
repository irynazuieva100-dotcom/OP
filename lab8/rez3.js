function contract(fn, ...types) {
    return function(...args) {
        if (args.length !== types.length - 1) {
            throw new TypeError('Wrong number of arguments');
        }

        for (let i=0; i<args.length; i++) {
            if (args[i] == null || args[i].constructor !== types[i]) {
                throw new TypeError('Wrong argument type');
            }
        }

        const res = fn(...args);
        if (res == null || res.constructor !== types[types.length-1]) {
            throw new TypeError('Wrong result type');
        }
        return res;
    };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'));

