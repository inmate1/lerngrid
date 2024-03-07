// (**) Задача с собеседований на числа Фибоначчи
// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
// Задача:
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
////////////////////////////////////////////
function fibonacciNumbers(count) {
  if (!Number.isInteger(count) || count <= 0) {
    return '';
  }

  let fibonacci = [];
    for (let i = 0; i < count; i++) {
        if (i === 0) {
            fibonacci.push(0);
        } else if (i === 1) {
            fibonacci.push(1);
        } else {
            console.log(fibonacci);
            let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(nextNumber);
          
        }
       
    }
  return fibonacci.join(' ');
}
console.log(fibonacciNumbers(4)); // => ''0 1 1 2"
console.log(fibonacciNumbers(7)); // => ''0 1 1 2 3 5 8"
console.log(fibonacciNumbers('7')); // => ''"
console.log(fibonacciNumbers(1)); // => "0"
console.log(fibonacciNumbers(0)); // => ''"
//////////////////////////////////////////////////
function fib(num) {
  if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) {
    return '';
  }

  let result = '';                   //""0
  let first = 0;                     //0 1 1 2 3 5 8
  let second = 1;                    //1 1 2 3 5 8 13

  for (let i = 0; i < num; i++) {    //0 1 2 3 4 5 6
    if (i + 1 === num) {             //false
      result += `${first}`;
      // Без пробела в конце
    } else {
        result += `${first} `;       //0+1+1+2+3+5+8
        // console.log(result);
    }

    let third = first + second;      //1 2 3 5 8 1321
    first = second;                  //1 1 2 3 5 8 13
    second = third;                  //1 2 3 5 8 13 21
  }

  return result;
}

console.log(fib(4)); // => ''0 1 1 2"
console.log(fib(10)); // => ''0 1 1 2 3 5 8"
console.log(fib('7')); // => ''"
console.log(fib(1)); // => "0"
console.log(fib(0)); // => ''"

// Find

function foo(array, target) {
  let left = array[0];
  let right = array.length - 1;
  while (left <= right) {
    let center = Math.floor((left + right )/ 2);
    // (parameter) target: any
    if (array[center] === target) {
      return center;
    } else if (array[center] < target) {
      left = center + 1;
    } else {
      right = center - 1;
     
    } 
    
  }
   return -1;
}

// [1, 3, 5, 7]
const arr = [1, 3, 5, 7, 9, 11, 13, 14, 15, 26, 28, 34];
const num = 5;
const index = foo(arr, num);
console.log(index);