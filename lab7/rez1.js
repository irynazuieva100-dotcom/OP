function removeElements(array, ...items) {
    items.forEach(item => {
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    });
}
const numbers = [1, 2, 3, 4, 5, 6, 7];
removeElements(numbers, 5, 1, 6);
console.log(numbers); // [2, 3, 4, 7]
const cities = ['Kiev', 'Beijing', 'Lima', 'Shepetivka'];
removeElements(cities, 'Lima', 'Berlin', 'Kiev');
console.log(cities); // ['Beijing', 'Shepetivka']
