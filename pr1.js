// stack
let name1 = 'Haider'

let name2 = name1
name2 = 'anis'
console.log(name1);
console.log(name2);

// heap 
let obj1 = {
    email : 'haider@gmail.com',
    pass : 'admin'
};
let obj2 = obj1
obj2.email = 'anis@gmail.com'
console.log(obj1);
console.log(obj2);