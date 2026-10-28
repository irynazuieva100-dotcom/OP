function removeElement(array, item) {
    const i = array.indexOf(item);
    if (i !== -1) {
        array.splice(i, 1);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElement(numbers, 5);
console.log(numbers);

const cities = ['Kiev', 'Beijing', 'Lima', 'Shepetivka'];
removeElement(cities, 'Lima');
removeElement(cities, 'Berlin');
console.log(cities);
