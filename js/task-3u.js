// // Написати функцію, котра створить новий масив в якому
// // не буде значень, які приводяться до false

// const array = [
//   1,
//   0,
//   54,
//   'doc',
//   null,
//   'jpg',
//   undefined,
//   '',
//   'png',
//   'exe',
//   false,
//   'mp4',
//   NaN,
//   'hbs',
// ];
// function errorfalse() {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (!i) {
//             continue;
//         }
//         newArray.push(i);
//     }
//     return newArray;
// }
// console.log(errorfalse(array));

// Напиши скрипт, який порівняє два масива і виведе у консоль результат:
// true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// function compareArrays(firstArray, secondArray) {
//     if (firstArray.length !== secondArray) {
//         return false;
//     }
//     for (const item of firstArray) {
//         if (!secondArray.includes(item)) {
//             return false
//         }
//     }
//     return true;
// }
// console.log(compareArrays(arr1, arr2));
// console.log(compareArrays(arr3, arr4));
// console.log(compareArrays(arr5, arr6));
// console.log(compareArrays(arr7, arr8));

// ✅Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function caclculateAverage(...arg) {
//     console.log(arg.length);
//     let sumArgs = 0;
//     const arr = [];
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof (arg[i]) === "number") {
//             arr.push(arg[i]);
//             sumArgs += arg[i];
//             console.log(arr);
//         }
//         // sumArgs += i;
//     }
//     return sumArgs / arr.length;
// }
// console.log(caclculateAverage(1, 4, 5, "hello"));

// ✅Напишіть функцію countOccurrences, яка приймає масив і елемент,
// і повертає кількість входжень цього елемента у масиві.
// Використовуйте цикл for...of для ітерації через елементи масиву
// та порівнюйте їх з вказаним елементом для підрахунку кількості входжень.

// const numbersArray = [1, 2, 3, 2, 4, 2, 5];
// const targetNumber = 2;
// function countOccurrences(arr, target) {
//     let count = 0;
//     for (const iterator of arr) {
//         if (iterator === targetNumber) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(countOccurrences(numbersArray, targetNumber));
//✅
// Напишіть функцію findMaxNumber, яка приймає масив чисел і повертає
// максимальне число у цьому масиві.Використовуйте цикл for...of для
// ітерації через елементи масиву.
// function findMaxNumber(params) {
//     let maxNumber = params[0];
//     for (const iterator of params) {
//         if (iterator > maxNumber)
//             maxNumber = iterator

//     }
//     return maxNumber;
// }
// console.log(findMaxNumber([1, 2, 3, 4, 45, 33]));

//✅
// Додати метод getinfo в об'єкт user, який повертатиме інформацію
// про користувача у форматі:
// `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }

// user.getinfo = function () {
// return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// }
// console.log(user.getinfo());
//✅
// Створіть об'єкт calculator із трьома методами:
//read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//sum() - повертає суму збережених значень
//mult() - перемножує збережені значення та повертає результат

// const calculator = {
//     read(a, b) {
//         this.waluel = a;
//         this.walue2 = b;
//     },
//     sum() {
//         return this.waluel + this.walue2;
//     },
//     mult() {
//         return this.waluel * this.walue2;
//     }
// }
// calculator.read(5, 8);
// console.log(calculator.sum());

//✅
// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// function checkKeyInObject(obj, key) {
//     // for (const objKey in obj) {
//     //     if (objKey === key) {
//     //         return true;
//     //     }
//     // }
//     // return false;
//     return Object.keys(obj).includes(key);

// }
// console.log(checkKeyInObject(user, "car"));
//✅
// Є об'єкт, у якому зберігаються обрані товари у кошику.
// Напишіть код для визначення загальної суму замовлення
// і збережіть його результат у змінній totalCost.
// Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
// let totalCost = 0;
// // console.log(Object.values(cart));
// // console.log(Object.keys(cart));
// // for (const iterator of Object.values(cart)) {
// //     totalCost += iterator
// // }
// for (const key in cart) {
//     totalCost += cart[key];

//     }

// console.log(totalCost);
//✅// Напишіть функцію getPropertyValues(), яка приймає масив об'єктів
// та ключ, і повертає масив значень цього ключа у кожному об'єкті

// const myArr = [
//   {name: "John", age: 30},
//   {name: "Jane", age: 25},
//   {name: "Bob", age: 40},
// ];

// function getPropertyValues(arr, key) {
//     const newArr = [];
//     for (const iterator of arr) {
//         newArr.push(iterator[key])
//     }
//     return newArr;
// }
// console.log(getPropertyValues(myArr, "age"));
//✅
// Знайти студента з найменшим віком та вивести інформацію про нього у форматі:
// `Студент з найменшим віком: name, Вік: age, Спеціальність: major`

// const students = [
//   { name: 'Олександр', age: 20, major: 'Інформатика' },
//   { name: 'Марія', age: 21, major: 'Психологія' },
//   { name: 'Іван', age: 19, major: 'Економіка' }
// ];
// function youngerStudend(params) {
//     let minAge = students[0];
//     console.log(minAge);
//     for (const iterator of object) {
//         if (iterator.age < minAge.age) {
//             minAge = iterator;
//     }
//         return `Студент з найменшим віком: ${minAge.name}, Вік: age, Спеціальність: major`;
// }
// console.log(youngerStudend());
// const students = [
// { name 'Олександр', age 20. major '1нформатика' },
// { name 'Mapifl' age 21. major 'Психолог1я' }.
// { name '1ван', age 19, major 'Економ1ка' }
// ];
// function searchYoungerStudents () {
// let youngStudents = students[0]
// console log(youngstudents)
// for ( const student of students) {
// if ( student age < youngstudents age) {
// youngStudents = student;
// }
// }
// return Студент в наймрншим BiKOM${youngStudents name} BiK ${youngStudents age} CneuianbHicTb ${youngStudents major}
// }
// searchYoungerStudents()
// console log(searchYoungerStudents())

// //✅Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
// `Загальна сума всіх замовлень: totalAmount`

const orders = [
  { id: 1, product: 'Футболка', quantity: 2, price: 15 },
  { id: 2, product: 'Шорти', quantity: 3, price: 20 },
  { id: 3, product: 'Кросівки', quantity: 1, price: 50 },
];

function getTotalSum() {
  let totalAmount = 0;
  for (const order of orders) {
    totalAmount += order.quantity * order.price;
  }
  return totalAmount;
}
console.log(getTotalSum(orders));
