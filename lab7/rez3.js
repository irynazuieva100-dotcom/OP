function unique(array) {
    return array.reduce((result, item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
        return result;
    }, []);
}
console.log(unique([2, 1, 1, 3, 2]));
console.log(unique(['top', 'bottom', 'top', 'left']));
