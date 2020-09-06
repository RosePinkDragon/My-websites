// //regular function
// // const calcArea = function(radius){
// //     return 3.14* radius**2;
// // };

// //arrow fucbntions are new and better
// //no parenthesis means empty brackets

// //simplify 1
// const calcArea = radius => {
//      return 3.14 * radius**2;
//      //for one parameter we dont use brackets 
//      //eg (radius) can be written as radius only
//      //but while using more than one the brackets should be there
// }

// //eg 2
// const calcArea2 = radius => 3.14* radius**2;
// //this works for 1 line function only.


// //you cant use arrow funtions with 'this' which we learn later on

// const area = calcArea(5);
// console.log('area is: ', area);

// //practice


//pract 2

// const bill = function(products, tax)
// {
    
//     let total = 0;
    
//     for( let i=0; i < products.length; i++)
//     {
        
//         total += products[i] + products[i] * tax;
        
//     }
//     return total;
// }

// const add = function(a, b){
//     let sum = a+b;
//     return sum;
// };

// console.log(add(3,2));


// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i < products.length; i++)
//     {
//         total += products[i] + products[i] * tax;
//     }
//         return total;
// };

const bill = (products, tax) =>{
    let total = 0;
    for(let i=0; i < products.length; i++){
        total =+ products[i] + products[i] * tax;
    }
    return total;
}

 console.log(bill([300,200,500], 0.7));

// const bill = (products, tax) => {

// }

//console.log(bill([10,15,122],0.2));

// const final = bill(products, 5);
// console.log(final);