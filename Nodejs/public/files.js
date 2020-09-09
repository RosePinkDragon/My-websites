const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

console.log('last line')

//writing files
fs.writeFile('./docs/blog2.txt', 'hello, i am auto writtern file', () => {
    console.log('file was written')
    //will create a new file if it doesn't exist'
});

//directories folders
if(!fs.existsSync('./assets')){
//'!' is used to negate a value so instead of checking if the file exists it will check if it doesn't exist
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err);
            //will throw an error if the directory already exists
        }
        console.log('folder created')
    });
} else {
    fs.rmdir('./assets', err => {
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    });
}

//delteing file
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted');
        //you need to create a file everytime it is deleted else it will throw an error
    })
}




