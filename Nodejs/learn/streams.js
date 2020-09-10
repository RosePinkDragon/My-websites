const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('-----NEW CHUNK------');
//     console.log(chunk)

//     writeStream.write('\nNew Chunk\n')
//     writeStream.write(chunk);
// });
//shorter way to do the above is
//piping

readStream.pipe(writeStream);