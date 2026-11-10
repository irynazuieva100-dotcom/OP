function contract(fn, ...types) {
    return function(...args) {
        for (let i = 0; i < args.length; i++) {
            const typeName = types[i].name.toLowerCase();

            if (typeof args[i] !== typeName) {
                throw new TypeError('Wrong argument type');
            }
        const result = fn(...args);
        const resultType = types[types.length - 1].name.toLowerCase();

        if (typeof result !== resultType) {
            throw new TypeError('Wrong result type');
        }
        return result;
    };
}
const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));
const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'));
