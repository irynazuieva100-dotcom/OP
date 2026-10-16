function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('Random:', random(1, 10));
console.log('Random from 0:', random(10));
