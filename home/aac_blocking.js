const fs = require('fs');

console.log('Start program');

const data = fs.readFileSync('aae_blockingNonBlocking.txt', 'utf8');
console.log(data);

console.log('End program');