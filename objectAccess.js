


const person = { name: 'John', age: 30 };
const keys = Object.keys(person); //Returns an array of a given object's own property names.
console.log(keys); // Output: ['name', 'age']


const values = Object.values(person); //Returns an array of a given object's values
console.log(values); // Output: ['John', 30]


const entries = Object.entries(person); //Returns an array of a given object's [key, value] pairs.
console.log(entries); // Output: [['name', 'John'], ['age', 30]]

