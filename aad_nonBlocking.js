const fs = require('fs');

console.log('start program');

fs.readFile('aae_blockingNonBlocking.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('end program');