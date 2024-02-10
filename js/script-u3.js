Задания на использование циклов и условий

Задачи:

1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно.Цикл можно использовать любой
// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
    
}

2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
  for (let i = 20; i > 10; i--) {
      if (i === 13) {
          break;
      }
      console.log(i);
  }    
}
3. При помощи цикла for выведите чётные числа от 2 до 10 включительно
// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
   for (let i = 2; i <= 10; i++) {
       if (i % 2 !== 0) {
         continue;  
       } else {
       console.log(i);
   }
 }
}
4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.

 Цикл, который нужно переписать:
 
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
}

function fourthTask() {
    // Пишем решение вот тут
let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
         console.log(i);
     }
} 
}
 

5. Заполните массив цифрами от 5 до 10 включительно.Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i < 11; i +=1) {
        arrayOfNumbers.push(i);
    }
    
    
    // Не трогаем
    return arrayOfNumbers;
}
/// 2 variable
function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()