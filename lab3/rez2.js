function gen(len, ch) {
  let k = '';
  for (let i=0; i<len; i++) {
    const ind = random(characters.len - 1);
    k += ch[ind];
  }
  return k;
}
const ch = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log('Key:', gen(16, ch));
