score = '100'
//this is a string
score= Number(score);

console.log(score+1)
//returns 101 

result= Number('Hello')
//returns 'NaN' as it makes sense
console.log(result)

//but a number can be converyted to strings
result = String('50')
console.log(Number(result))
//returns 50

//typeof return the data type

console.log(result, typeof result);

//in booleans positive mumbers are true while negative are also true

console.log(Boolean(100))
//true 
console.log(Boolean(0))
//Only '0' is false


console.log(Boolean('100'))
//only empty strings are false rest are true

console.log(Boolean(''))
//false
