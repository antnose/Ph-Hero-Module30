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
