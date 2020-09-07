const name = 'shaun';
//funtions
//are 
const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

//methods
//are funtions that are defined for an object and data types
console.log(name.toUpperCase());

//calbacks and foreach
//callbacks are used for for each

const myFunc = (callbcakFunc) => {
    let value = 50;
    callbcakFunc(value);
};

myFunc(value => {
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach ((people, index) => {
    console.log('i is', people, index);
});

const logPerson = (person, index) => {
    console.log(`${index+1} - hello ${person}`);
};

people.forEach(logPerson);

//refrence the ul tag in html page
const ul = document.querySelector('.people');

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;