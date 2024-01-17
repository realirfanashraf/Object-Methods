

//Returns a boolean indicating whether the object has the specified property as its own property.
const person = { name: 'John', age: 30 };
console.log(person.hasOwnProperty('name')); // Output: true



const propertyNames = Object.getOwnPropertyNames(person);
//Returns an array of all properties (enumerable or not) found directly upon a given object.
console.log(propertyNames); // Output: ['name', 'age']



const prototype = Object.getPrototypeOf(person);
//Returns the prototype (internal [[Prototype]] property) of the specified object.
console.log(prototype); // Output: {}

