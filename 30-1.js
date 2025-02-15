// // 30-1 ES6 Intro Difference Between Var, Let and Const
// const money = 25;
// const rich = money + 25;
// console.log(rich);

// let count = 0;
// count += 10;
// console.log(count);

// const numbers = [23, 4, 5, 6, 7, 8];
// console.log(numbers);

// 30-2 Function Default Parameter For Not Provided Values

// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// function add(num1, num2) {
//   return num1 + num2;
// }
// const sum = add(5, 90);
// console.log(sum);

// // function expression
// const add2 = function (a, b) {
//   return a + b;
// };
// console.log(add2(12, 30));

// // arrow function

// const add3 = (a, b) => {
//   return a + b;
// };
// console.log(add3(12, 12));

// 30-5 More arrow Functions And Big Arrow Function

// const difference = (x, y) => {
//   return x - y;
// };

// console.log(difference(12, 6));

// const multiply = (first, second, third, fourth) =>
//   first * second * third * fourth;
// console.log(multiply(12, 13, 14, 15));

// const getAge = (person) => person.age;
// const student = {
//   name: "ananta",
//   age: 34,
// };
// console.log(getAge(student));

//  30-6 Spread Operator, Array Max, Copy Arrays

// const max = Math.max(1, 16, 45, 39, 89, 100, 2034, 59);
// const numbers = [12, 3, 4, 5, 6, 7, 8, 9, 0, 100, 30];
// const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);
// console.log(max);

// 30-7 (Advanced) Object And Array Destructure

// const actor = {
//   name: "Ananta",
//   age: 30,
//   phone: "019393939",
//   money: 122339339,
// };

// if right side is an object left side of destructing will be object as well
// const { phone } = actor;

// Use property name as a variable that contains the property value
// const { age: boyosh, money } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

// console.log(phone);
// console.log(boyosh);
// console.log(money);

// array destructing
// const numbers = [47, 90];
// const [first, second] = numbers;
// const [x, y] = [12, 55];
// console.log(first, second);
// console.log(x, y);

// Advanced
// function doubleThem(a, b) {
//   return [a * 2, b * 2];
// }
// console.log(doubleThem(44, 56));
// console.log(...doubleThem(12, 33));

// const [prothom, ditio] = doubleThem(6, 9);
// console.log(prothom, ditio);

// 30-8 Keys, Values, Entries, Delete, Seal, Freeze
// const glass = {
//   name: "glass",
//   color: "Golden",
//   price: 12,
//   isCleaned: true,
// };

// console.log(glass);
// const keys = Object.keys(glass);
// console.log(keys);

// const values = Object.values(glass);
// console.log(values);

// the entries is give me array of array or it called two dimensional array.
// const pair = Object.entries(glass);
// console.log(pair);

// delete glass.isCleaned;
// console.log(glass);

// const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze

// Object.freeze(glass);
// glass.source = "Bangladesh";
// glass.price = 5000;
// delete glass.name;
// console.log(glass);

// Object seal

// Object.seal(glass);
// glass.source = "Bangladesh";
// glass.price = 5000;
// delete glass.name;
// console.log(glass);

// 30-9 For Of, For In, Module Summary And Practice Problems

const numbers = [1, 3, 4, 5, 6, 7, 8, 90];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// for (const num of numbers) {
// console.log(num);
// }

// const nobab = "Shiraj Ud Doula";
// for (const char of nobab) {
// console.log(char);
// }

// const glass = {
//   name: "glass",
//   color: "Golden",
//   price: 12,
//   isCleaned: true,
// };

// for (const key of glass) {
//   console.log(key);
// }

// for (const key in glass) {
//   const value = glass[key];
//   console.log(key, value);
// }

// Optional
// const keyss = Object.keys(glass);
// console.log(keyss);

// for (const key of keyss) {
//   const value = glass[key];
//   console.log(key, value);
// }

// ------------> Summary is <------------ \\
// for of use on array or string not in object
// for in use on object

// Common ES6 Interview Questions
/**
 * Ques 1. What is ES6? Have you ever used anything from es6?
 * Answer 1. ES6 stands for ECMAScript 6, which is the sixth version of the ECMAScript language specification standard. It's also known as ECMAScript 2015.
 *
 * Ques 2. Explain the difference between var, let and const.
 * Answer 2. In JS, 'var' , 'let' and 'const' are all keywords used to declare variables, but they differ primarily in their scope and mutability: 'var' is function-scoped and can be re-declared and 'const' is also block-scoped but cannot be reassigned once initialized, essentially making it a constant value
 */
