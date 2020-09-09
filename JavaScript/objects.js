// object literals
//this is a keyword

let user = {
    name: 'crystal',
    age: 30,
    email: 'mohebdabilkar@gmail.com',
    location: 'nerul',
    blogs: ['why not', 'why yes'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged in');
    },
    thisEg: function(){
        //console.log(blogs) wont work
        //will through an error the proper way is to use 'this' keyword
        console.log(this);
        //will print entire object details
        //this keyword is a context object
        //it refers to the object attributes

    },
    logBlogs: function() {
        console.log('The blogs are:');
        console.log(this.blogs.forEach(blog => {
            console.log(blog);
        }));
        //yes you can use array methods with this keyword
    },
    //if you use an arrow funtion with this keyword there will be no refrencce to the object
    //it will refer to the window object
    //eg:-
    arrowFuncEg: () => {
        console.log(this);
        //will print data of window object
    },
    //you can also create a attribute styled funtion like this
    shortFunc(){
        console.log("new style function");
    }
}

user.arrowFuncEg();
user.thisEg();
user.logBlogs();
user.shortFunc();