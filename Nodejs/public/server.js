const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
     
    //console.log(req.url, req.method);
    
    //using lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(() => {
        console.log('Hello')
    })

    greet();
    //since we used once method so greet will not run again
    greet();
     //set header content type
     res.setHeader('Content-Type', 'text/html');
    //res.write('<head><link rel="stylesheet" href="#"></head>');
    //res.write('<p>hello, longboarders</p>');
    //res.write('<p>hello its a me, mario</p>');
    //above commented are to put in direct filesize

    //redirect to different url when
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    //below are to enter html file 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else 
        {
            //res.write(data);
            //if we are sending only one thing we can put the parameter directly in the end
            
            res.end(data);

        }
    })
    
 });

 server.listen(3000, 'localhost', () => {
     console.log('listening for requests on port 3000');
 });