function ipToNumber(ip = '127.0.0.1') {
  return ip
    .split('.')
    .map(Number)
    .reduce((result, byte, index) => {
      return result + (byte << (8 * (3 - index)));
    }, 0);
}

console.log('127.0.0.1 ->', ipToNumber('127.0.0.1'));
console.log('10.0.0.1 ->', ipToNumber('10.0.0.1'));
console.log('192.168.1.10 ->', ipToNumber('192.168.1.10'));
console.log('165.225.133.150 ->', ipToNumber('165.225.133.150'));
console.log('0.0.0.0 ->', ipToNumber('0.0.0.0'));
console.log('8.8.8.8 ->', ipToNumber('8.8.8.8'));
