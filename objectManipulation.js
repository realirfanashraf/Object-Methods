const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source); //Copies the values of all 
//enumerable own properties from one or more source objects to a target object
console.log(result); // Output: { a: 1, b: 3, c: 4 }
//--------------------------------------------------------------------------------------//
const person = {
    name: 'John',
    age: 30
};

// Freeze the object
Object.freeze(person); //is used to make an object immutable, meaning that its properties cannot be 
//added, modified, or removed. Attempts to make changes will result in errors or being ignored.

// Attempt to add a new property
person.address = '123 Main St';  // This won't work

// Attempt to change the value of an existing property
person.name = 'Jane';  // This won't work

// Attempt to delete an existing property
delete person.age;  // This won't work

console.log(person);  // Output: { name: 'John', age: 30 }

//---------------------------------------------------------------------------------------------//

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};

// Seal the object
Object.seal(car); //prevents the addition or deletion of properties on an object, 
//while allowing the modification of existing properties.

// Attempt to add a new property
car.color = 'blue';  // This won't work

// Attempt to delete an existing property
delete car.year;  // This won't work

// Attempt to change the value of an existing property
car.model = 'Corolla';  // This will work

console.log(car);  // Output: { make: 'Toyota', model: 'Corolla', year: 2020 }
//-------------------------------------------------------------------------------------------//


