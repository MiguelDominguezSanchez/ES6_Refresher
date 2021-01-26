// CONST & LET

// let name = 'Jhon';
// let test;

// name = 'Jack';

// const person = {
// 	name: 'Jhon',
// 	age: 33,
// };

// person.name = 'Jack';

// const nums = [1, 2, 3, 4];
// nums.push(5);

// console.log(nums);

// ARROW FUNCTIONS

// function sayHello() {
// 	console.log('Hello');
// }

// const sayHello = name => console.log(`Hello ${name}`);

// const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
// fruits.forEach((fruit, index) => console.log(fruit));

// MAP
// const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

// console.log(singleFruit);

// FILTER
// const people = [
// 	{ id: 1, name: 'Karen' },
// 	{ id: 2, name: 'Bob' },
// 	{ id: 3, name: 'Sharon' },
// ];

// const people2 = people.filter(person => person.id !== 2);
// console.log(people2);

// // SPREAD
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4];
// const arr3 = [...arr.filter(num => num !== 2)];

// console.log(arr3);

// const person1 = {
// 	name: 'Brad',
// 	age: 36,
// };

// const person2 = {
// 	...person1,
// 	email: 'Brad@gmail.com',
// };

// console.log(person2);

// // DESTRUCTURING

const profile = {
	name: 'John Doe',
	address: {
		street: '40 Main st',
		city: 'Boston',
	},
	hobbies: ['movies', 'music'],
};

const { name, address, hobbies } = profile;
const { street, city } = profile.address;

console.log(street, city);

// CLASSES

// SUBCLASSES

// MODULES
