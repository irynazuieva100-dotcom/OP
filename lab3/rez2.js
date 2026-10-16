function generateKey(length, characters) {
  let key = '';

  for (let i = 0; i < length; i++) {
    const index = random(characters.length - 1);
    key += characters[index];
  }

  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

console.log('Key:', generateKey(16, characters));
