// function getElementWidth(content, padding, border) {
//     const borderBox =
//       Number.parseFloat(content) +
//       2 * Number.parseFloat(padding) +
//       2 * Number.parseFloat(border);
//     return borderBox;
// }
// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// Цикл while

// function calculateTotal(number) {
//     let i = 0;
//     let sum = 0;
//     while (i <= number) {

//          sum = sum + i;
//         // console.log(sum);
//         i += 1;
//     }
//      return sum;
// }
// console.log(calculateTotal(24));

// for

// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// console.log(calculateTotal(18));


// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// function calculateEvenTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       total += i;
//       // console.log(i);
//     }
//   }
//   return total;
// }
// console.log(calculateEvenTotal(7));

// const start = 6;
// const end = 17;
// let number;
// for(let i = start; i <= end; i += 1) {

//   if(i % 5 === 0) {
//     number = i;
//     console.log(number);
//     break;
//   }
// }

// function findNumberFromFive(max, target) {
//   console.log('Log in the body of the function before the cycle');

//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i);

//     if (i === target) {
//       console.log(
//         `Found the number $ {target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log('Log in body function after cycle');
// }

// const result = findNumberFromFive(10, 7);
// console.log('Log after exiting function');
// console.log(`Result of function execution ${result}`);

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }
// console.log(findNumber(2, 9, 2));

// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`
// function variableType(value) {

// }

// Написати функція для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// виводить в консоль повідомлення "Довжина рядка length"
function foo(string) {
  return `Довжина рядка: ${string.length}`;
}
console.log(foo("variable"));
