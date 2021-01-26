// // CLASSES
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	greet() {
// 		return `Hello, my name is ${this.name} and I am ${this.age}`;
// 	}
// }

// const person1 = new Person('John', 33);
// const person2 = new Person('Sara', 28);

// console.log(person1.greet());

// // SUBCLASSES
// class Customer extends Person {
// 	constructor(name, age, balance) {
// 		super(name, age);
// 		this.balance = balance;
// 	}

// 	info() {
// 		return `${this.name} owes $${this.balance}.00`;
// 	}
// }

// const customer1 = new Customer('Kevin', 32, 300);

// MODULES

// // file 1 (file.js)
// export const name = 'Jeff';
// export const nums = [1, 2, 3];
// export default personalbar;

// //  file 2 (file2.js)
// import { name, nums } from './file1';
// import Person from './file1';
