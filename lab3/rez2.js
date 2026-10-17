function random(max) {
    return Math.floor(Math.random() * (max + 1));
}
function gen(len, ch) {
    let k = '';
    for (let i=0; i<len; i++) {
        const ind = random(ch.length - 1);
        k += ch[ind];
    }
    return k;
}
const ch = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(gen(16, ch));
