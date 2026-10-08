const values = [true, "hello", 5, 12, false, "world", 1000000000, "true", true, 1010, "Ira", -20, "JavaScript", false, "c++", "Italy"];

const types = {
    number: 0,
    string: 0,
    boolean: 0
};

for (const value of values) {
    const type = typeof value;
    types[type] = types[type] + 1;
}

console.log("Підрахунок з готовими ключами:");
console.log(types);

const dynamicTypes = {};

for (const value of values) {
    const type = typeof value;

    if (dynamicTypes[type] === undefined) {
        dynamicTypes[type] = 0;
    }

    dynamicTypes[type] = dynamicTypes[type] + 1;
}

console.log("Підрахунок з динамічними ключами:");
console.log(dynamicTypes);
