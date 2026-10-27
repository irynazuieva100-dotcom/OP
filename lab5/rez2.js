function array() {
    const mas = [];

    function get(i) {
        return mas[i];
    }

    get.push = function(value) {
        return mas.push(value);
    };

    get.pop = function() {
        return mas.pop();
    };

    return get;
}

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

