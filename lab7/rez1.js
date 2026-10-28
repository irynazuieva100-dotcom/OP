function removeElements(array, item) {
    const i = array.indexOf(item);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElements(numbers, 5);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Shepetivka'];
removeElements(cities, 'Lima');
removeElements(cities, 'Berlin');
console.log(cities);
