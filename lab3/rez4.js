const obj = {
  m1: x => [x],
  
  m2: function (x, y) {
    return [x, y];
  },

  m3(x, y, z) {
    return [x, y, z];
  }
};

function intr(object) {
  return Object.keys(obj)
    .filter(key => typeof obj[key] === 'function')
    .map(key => [key, obj[key].length]);
}

console.log('Introspection:', intr(obj));
