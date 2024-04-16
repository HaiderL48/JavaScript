const num1 = 100
console.log(num1);

//explicitly specifying datatype number
const num2 = new Number(200)
console.log(num2);
console.log(num2.toString());
console.log(num2.toString().length);
console.log(num2.toFixed(4));


const num3 = new Number(111223.342)
// toPrecision converts number into string and return the roundof 
// after or before decimal as per Precision
console.log(num3.toPrecision(4));


const num4 = new Number(100000)
// toLocaleString converts into string from number and return the number 
// after adding commas like if number is '100000' then it returns '1,00,000'
console.log(num4.toLocaleString());