const fs = require('fs');

console.log('start program');

const data = fs.readFileSync('aae_blockingNonBlocking.txt', 'utf8');
console.log(data);

console.log('end program');