const express = require('express');
//express application
const app = express();
//morgan
const morgan = require('morgan');
//importing blog
const Blog = require('./models/blog');


//databse
const  mongoose = require('mongoose')
const dbURI = 'mongodb+srv://netninja:Asdf1123@nodeninja.afwxy.mongodb.net/node-tuts?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//no semicolon here
.then((result) => {
    console.log('connection successful')   
    app.listen(3000);
})
//no semicolon yet in the above line
.catch((err) => console.log(err));
//finally a semicolon, the function wont work w/o a semicolon
//this function requires semicolon at end not in between the lines

//register view engine
app.set('view engine', 'ejs');

// listen for requests
//the below line is put up in .then(result) part
//app.listen(3000);

//middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));

// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog 2',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) =>{
            res.send(result)
        })
        .catch((err) => {
             console.log(err);
        });
})

app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('5f5ca068322cb62358e4b0f2')
        .then((result) => {
            res.send(result)
        })
        .catch((err) =>{
            console.log(err);
        });
})

//routes
app.get('/', (req, res) => {
    // const blogs = [
    //     {title: 'Yoshi Finds Eggs', snippet: 'lorem ipdum dit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'lorem ipdum dit amet consectetur'},
    //     {title: 'Mario Found Princess', snippet: 'lorem ipdum dit amet consectetur'}
    // ];
    
    // res.send('<p>Home Page</p>');
    //res.sendFile('./views/index.html', {root: __dirname});
    //used to send ejs files
    //res.render('index', {title: 'Home', blogs})

    //if we write blogs: blogs the shortcut is blogs
    //else we write 'og': 'duplicate-name' without the inverted comma

    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // //res.send('<p>About Page</p>');
    // res.sendFile('./views/about.html', {root: __dirname});
    //ejs files
    res.render('about', {title: 'About'})
});

//redirect
app.get('/about-us', (req,res) => {
    res.redirect('/about', {title: 'About'});
});


//blog routes
app.get('/blogs', (req, res)=>{
    Blog.find().sort({ createdAt: -1 })
        .then((result) =>{
            res.render('index', {
                title: 'All Blogs',
                blogs: result
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

//create blog
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
})

//404 page i.e error page
//putting this line above will stop the code right thereby
app.use((req, res) => {
    res.status(404).render('404', {title: 'Error'});
});