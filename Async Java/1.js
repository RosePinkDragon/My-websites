console.log(1);
console.log(2);

//this will not block the console
//and will be displayed after 4
setTimeout(() => {
  console.log("callback fired after 10 secs");
}, 100);

console.log(3);
console.log(4);
