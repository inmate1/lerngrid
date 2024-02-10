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
// function foo(string) {
//   return `Довжина рядка: ${string.length}`;
// }
// console.log(foo("variable"));
//////////////////////////////////////////////
//                            Array
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// console.log(fruits);

// ////////////////////////////////////////////////
// function getOrderQuantity(order) {
//     return order.length;
// }
// console.log(getOrderQuantity(['apple', 'peach', 'pear', 'banana'])) ; // повертає 4
// console.log(getOrderQuantity(["apple", "banana"])); // повертає 2
// console.log(getOrderQuantity(["apple", "banana", "pear"])); // повертає 3
// console.log(getOrderQuantity([]));  // повертає 0
//////////////////////////////////////////////////////
// Функция getLastElementMeta(array)принимает один параметр array– массив произвольных значений. Дополни код функции таким образом, чтобы она возвращала новый массив из двух элементов:

// первый элемент – это индекс последнего элемента в массивеarray
// второй элемент – это значение последнего элемента в массивеarray
// function getLastElementMeta(array) {
//     // const lastValueArray = array[array.length -1];
//     // console.log(lastValueArray);
//     // const newArray = [array.length - 1, array[array.length - 1]];
//     // return newArray;
//      return ([array.length - 1, array[array.length - 1]]);
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])) ; // повертає [3, "banana"]
// console.log(getLastElementMeta(['apple', 'peach', 'pear'])); // повертає [2, "pear"]
// console.log(getLastElementMeta(['apple', 'peach'])); // повертає [1, "peach"]
// console.log(getLastElementMeta(['apple']));  // повертає [0, "apple"]
///////////////////////////////////////////////////////////////////////
// Функция getExtremeElements(array)принимает один параметр array– массив элементов произвольной длины.Дополни код функции таким образом, чтобы она возвращала массив из двух элементов – первого и последнего элементов параметра array.

// function getExtremeElements(array) {
//     return ([array[0], array[array.length - 1]]);
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));  //возвращает[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //возвращает["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));//возвращает["apple", "banana"]
/////////////////////////////////////////////
// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"  явное приведкние
// console.log(array + "5"); // "1,true,Poly5" не явное приведкние
//////////////////////////////////////////////////////////////
// Массив → Логическое значение (буль)
// При превращении массива в логическое значение любой массив, даже пустой, превращается в true.

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];
// if (emptyArray) {
//   console.log('если выполняется');
// } else {
//   console.log('иначе не выполняется');
// }

// if (nonEmptyArray) {
//   console.log('если выполняется');
// } else {
//   console.log('иначе не выполняется');
// }
/////////////////////////////////////////////////
// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// Оголошена функція getLength(array)
// Виклик getLength(["Mango", "hurries", "to", "the", "train"]) повертає 22
// Виклик getLength(["M", "a", "n", "g", "o"]) повертає 5
// Виклик getLength(["top", "picks", "for", "you"]) повертає 14

// function getLength(array) {
//     console.log(array.join(''));

//   return (array.join("").length);
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train'])); //повертає 22

///////////////////////////////////////////////////////////

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const array = message.split(' ');
  console.log(message.split(' '));
  return array.length * pricePerWord;
}
console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); //повертає 50
console.log(calculateEngravingPrice('Web-development is creative work', 40)); // повертає 160
//////////////////////////////////////////////////

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// console.log(fruits.length - 1);
///////////////////////////////////////////////////////////////////////
// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);
// console.log(allClients);
////////////////////////////////////////////////////////////
// Функция getSlice(array, value)принимает два параметра:

// array- массив произвольных элементов
// value- значение элемента массива для поиска
// Дополни код функции getSlice(array, value)так, чтобы она выполняла поиск значения value в массиве array и возвращала:

// пустой массив, если у array нет элемента со значениемvalue
// подмассив, начинающийся с начала array и до элемента со значением value включительно, если такой элемент есть в array
function getSlice(array, value) {
  const indexValue =
    array.indexOf(value) === -1
      ? array.splice()
      : array.slice(0, array.indexOf(value) + 1);

  // console.log(array.indexOf(value) +1);
  return indexValue;
}
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); //возвращает["Mango", "Poly"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); //возвращает["Mango", "Poly", "Ajax"]

console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); //возвращает["Mango"]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); //возвращает[]
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); //возвращает[]
//////////////////////////////////////////////////////////////////////////////
// Функция createArrayOfNumbers(min, max)принимает два параметра:

// min- целое число, с которого начинаются вычисления
// max- целое число, в которое включительно будут продолжаться вычисления
// Дополни код функции createArrayOfNumbers(min, max)таким образом, чтобы она возвращала массив всех целых чисел от значения minвключительно max.

// function createArrayOfNumbers(min, max) {
//     const array = [];
//     for (let i = min; i <= max; i++) {
//         array.push(i);
//     }
//     return array;
// }
// console.log(createArrayOfNumbers(1, 3)); //возвращает[1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //возвращает[14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //возвращает[29, 30, 31, 32, 33, 34]
/////////////////////////////////////////
const planets = ['Earth', 'Mars', 'Venus'];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
//////////////////////////////////////////////////////////
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

function calculateTotalPrice(order) {
  let summ = 0;
  for (let i = 0; i < order.length; i++) {
    console.log(order[i]);
    summ += order[i];
  }
  return summ;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); //повертає 138
//////////////////////////////////////////////
// Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
function getEvenNumbers(start, end) {
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      array.push(i);
    } else {
      // console.log(i);
      array;
    }
  }
  return array;
}
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(8, 8));
///////////////////////////////////////////////////////////////////
// Функция checkStorage(storage, item)принимает два параметра:

// storage- массив строк, описывающий доступные товары на складе
// item- строчка с названием товара, наличие которого нужно проверить
// Дополни код функции таким образом, чтобы она проверяла, присутствует ли такой товар в массиве storageи возвращала:

// строка "<item> is available to order!", где item- это название товара, если товар был найден
// строка "Sorry! We are out of stock!", если такого товара нет в массиве
// Сделай так, чтобы поиск по имени товара был независим от регистра, то есть, например, "plum"и "pLuM"должны быть найдены в массиве["apple", "plum", "pear"].

function checkStorage(storage, item) {
let isHereProduct = storage.includes(item.toLowerCase()) ? `${item.toLowerCase()} is available to order!` : `Sorry! We are out of stock!`

    // let isHereProduct;
    // for (let i = 0; i < storage.length; i += 1) {
    //     if (storage[i].toLowerCase() === item.toLowerCase()) {
    //         isHereProduct = `${item.toLowerCase()} is available to order!`;
    //         // console.log(storage[i]);
    //         break;
    //     }
    //     isHereProduct = `Sorry! We are out of stock!`;
       
    //     //  console.log(isHereProduct);
    // } 
    return isHereProduct;
}
console.log(checkStorage(["apple", "plum", "pear"], "plum")); //возвращает"plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); //возвращает"plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")); //возвращает"pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); //возвращает"pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")); //возвращает"Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); //возвращает"Sorry! We are out of stock!"
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Перед решением этой задачи следует отметить, что такое общие элементы. Общими элементами массивов называют те элементы, которые находятся во всех массивах.

// Например, в двух массивах [1, 3, 5]и [0, 8, 5, 3]общими будут числа 3и 5, поскольку они присутствуют в обоих входных массивах. А числа 0, 1и 8присутствуют только в одном из массивов.

// Функция getCommonElements(array1, array2)принимает два массива ( array1и array2) произвольной длины в качестве параметров.

// Дополни код функции:

// Создай пустой массив для хранения нового массива.
// Используй цикл for для итерации каждого элемента в array1.
// В теле цикла проверьте, существует ли текущий элемент в array2 при помощи метода includes.
// Если он существует, то добавь элемент к новому массиву.
// Верни наполненный массив общих элементов как результат работы функции.

function getCommonElements(array1, array2) {
    const array = [];
    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
      
        if (!array2.includes(element)) {
            //  console.log(array2.includes(element));
            continue;
           
        } array.push(element);
          console.log(element);
    }
    return array;
}
console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
//////////////////////////////////////////////////////////////////
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

///////////////////////////////////////////////////////////
// Дополни код функции calculateTotalPrice(order)так, чтобы она возвращала общую сумму чисел в массиве order.Используй цикл for...ofдля перебора массива.


// function calculateTotalPrice(order) {
//   let summ = 0;
//     for (const iterator of order) {
      
//       // console.log(iterator);
//       summ = summ + iterator;
//   }
//   return summ;
//   }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //возвращает138
// console.log(calculateTotalPrice([164, 48, 291])); //возвращает503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает1116
// console.log(calculateTotalPrice([])); //возвращает0
// console.log(calculateTotalPrice()); //со случайным массивом чисел возвращает правильную сумму
///////////////////////////////////////////////////
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);
//////////////////////////////////
// Розгляньмо приклад використання arguments у функції, яка повертає результат множення будь-якої кількості аргументів.

function multiply() {
  let total = 1;

  for (const arg of arguments) {
    console.log(arguments);
    total *= arg;
    
  }

  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
////////////////////////////////////////////////////////////////
function foo() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
   console.log(args);
  return args.join("-");
 
}

console.log(foo(1, 2, 3)); // Поверне "1-2-3"
///////////////////////////////////////////////////////////////
Функция createReversedArray()может принимать случайное количество аргументов.Дополни код функции так, чтобы она возвращала массив всех аргументов, но в массиве они должны идти в обратном порядке.То есть, при вызове createReversedArray(1, 2, 3), функция должна вернуть массив[3, 2, 1].Используй цикл или метод массива toReversed(), применяемый к массиву и результатом работы возвращает новый массив с элементами в обратном порядке.
  
function createReversedArray() {
  // const array = Array.from(arguments);
  // console.log(array);
  // return array.toReversed();
  ////////////////////////////////////////////
  const array = Array.from(arguments);
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    const element = array[i];
    newArray.push(element);
  }
  return newArray;
  }

console.log(createReversedArray(12, 85, 37, 4)); //возвращает[4, 37, 85, 12]
console.log(createReversedArray(164, 48, 291)); //)возвращает[291, 48, 164]
console.log(createReversedArray(412, 371, 94, 63, 176)); //возвращает[176, 63, 94, 371, 412]
console.log(createReversedArray()); //возвращает[]
////////////////////////////////////////
Функция calculateTax(amount, taxRate)объявляет два параметра:
amount– число, сумма от которого требуется исчислить налог. Обязателен параметр.
taxRate– число, налоговая ставка. Необязательный параметр. По умолчанию его значение должно быть 0.2.
Дополни код функции так, чтобы она возвращала сумму налога – результат умножения суммы на налоговую ставку.

function calculateTax(amount, taxRate = 0.2) {
  const tax = amount * taxRate;
  return tax;
  
}
console.log(calculateTax(100, 0.1)); // повертає 10
console.log(calculateTax(200, 0.1)); // повертає 20
console.log(calculateTax(100, 0.2)); // повертає 20
console.log(calculateTax(200, 0.2)); // повертає 40
console.log(calculateTax(100, 0.3)); //возвращает30
console.log(calculateTax(200, 0.3)); //возвращает60
console.log(calculateTax(100)); //возвращает20
console.log(calculateTax(200)); //возвращает40

function secondTask() {
    // Пишем решение вот тут
  for (let i = 20; i > 10; i--) {
      if (i === 13) {
          break;
      }
      console.log(i);
  }    
}
secondTask()
function thirdTask() {
    // Пишем решение вот тут
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      console.log(i);
    }
  }  
}
  thirdTask();
let i = 2;
while (i < 16) {
   i++;
    if (i % 2 === 0) {
        continue;
    } else {
         console.log(i);
  }
   
}
 for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i +=1) {
        arrayOfNumbers.push(i);
    }
    
    
    // Не трогаем
    return arrayOfNumbers;
}
console.log(fifthTask());

let result = ``;
const length = 7;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < i; j++) {
   result += "*";
  }
  result += "\n";
}
console.log(result);