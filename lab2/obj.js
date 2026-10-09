function fn() {
    const a = { name: "Maria" };
    let b = { name: "Anna" };

    a.name = "Ira";
    b.name = "Olena";

    b = { name: "Sofia" };

    console.log(a);
    console.log(b);
}

fn();

function create(name, city) {
    return {name:name, city:city};
}

console.log("Новий користувач:");
console.log(create("Marcus Aurelius", "Roma"));
