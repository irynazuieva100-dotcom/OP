function avg(a, b) {
    return (a+b)/2;
}
function sq(x) {
    return x*x;
}
function cube(x) {
    return x*x*x;
}

function calculate() {
    const mas = [];
    for (let i=0; i<10; i++) {
        const a = sq(i);
        const b = cube(i);
      
        mas.push(avg(a, b));
    }
    return mas;
}

console.log("Середнє арифметичне квадрата і куба:");
console.log(calculate());
