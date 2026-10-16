function ipp(ip = '127.0.0.1') {
    const part = ip.split('.');

    for (let i = 0; i < part.length; i++) {
        part[i] = Number(part[i]);
    }
    const res = part.reduce((sum, number, index) => {
        return sum + (number << (8 * (3 - index))); }, 0);
    return res;
}
console.log(ipp('127.0.0.1'));
console.log(ipp('10.0.0.1'));
console.log(ipp('192.168.1.10'));
console.log(ipp('165.225.133.150'));
console.log(ipp('0.0.0.0'));
console.log(ipp('8.8.8.8'));
