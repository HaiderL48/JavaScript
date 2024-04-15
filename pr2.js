// String

let name = 'Haider'

let name3 = 'anis'

console.log(name + name3);
console.log(`First name is ${name} and the second name is ${name3}`);

// type of string declaration
const name4 = new String('  HAIDER   ')

console.log(name4[4]);
// lenght method
console.log(name4.length);
//to lower case method
console.log(name4.toLowerCase());
//character at method
console.log(name4.charAt(2));
// find with index method
console.log(name4.indexOf('i'));
// substring displaying charter from n to m  method
console.log(name4.substring(0,4));
//slicing charter from n to m  method
console.log(name4.slice(4,6));
//trim whitespaces method
console.log(name4.trim());
console.log(name4.__proto__);
console.log(typeof(name3));

const name5 = new String('HAI DER')
//replace method
console.log(name5.replace(' ','%'));
