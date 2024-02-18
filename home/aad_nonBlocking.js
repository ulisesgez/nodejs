const fs = require('fs');

console.log('Start program');

fs.readFile('aae_blockingNonBlocking.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('End program');