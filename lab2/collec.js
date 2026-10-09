const cont = [
    {name: "Ira", phone: "+380000000001"},
    {name: "Anna", phone: "+380000000002"},
    {name: "Katy", phone: "+380000000003"}
];

function phone(name) {
    for (let i=0; i<cont.length; i++) {
        if (cont[i].name === name) {
            return cont[i].phone;
        }
    }
    return undefined;
}

console.log(phone("Anna"));

const hash = {
    Ira: "+380000000001",
    Anna: "+380000000002",
    Katy: "+380000000003"
};

function phone2(name) {
    return hash[name];
}

console.log(phone2("Ira"));

