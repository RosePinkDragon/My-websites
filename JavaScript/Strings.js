
//strings
let email='mohebdabilkar@gmail.com'
console.log(email);

//concatination
let fName = 'Moheb'
let LName = 'Dabilkar'
let FullName = fName + ' ' + LName;
console.log(FullName);
console.log(fName + ' ' + LName);

//getting Characters
let a=0
console.log(FullName[0], FullName[3])
//0 means first letter

//string lenght
console.log(FullName.length)

//string methods

console.log(FullName.toUpperCase());
let result= FullName.toLowerCase();
console.log(result, FullName);

let index = email.indexOf('@');
console.log(index)

//common methods
result = email.lastIndexOf('i');
console.log(result)

result= email.slice(2,4)
console.log(result)

result = email.substr(1,14)
//substr goes from 1 position to amount specified
console.log(result)

result = email.replace('m','n')
console.log(result)

//diffrent way to concatenate this is a new way
//called template string way
//so first concat way
result='the blog by ' + FullName + ' is lit ' + email
console.log(result)

//template string way 
//template sting uses back ticks  ` ` <- this below esc key

result = `The blog by ${FullName} by ${email} is cool af`
console.log(result)

//html template using string template

let html= `
<h2>${FullName}</h2>
<p>${email}</p>
<span>this is in console made in js </span> `;
console.log(html)