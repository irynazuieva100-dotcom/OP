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
    return Object.keys(object)
        .filter(key => typeof object[key] === 'function')
        .map(key => [key, object[key].length]);
}

console.log('Introspection:', intr(obj));
