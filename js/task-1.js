// function checkAge(age) {
//   if (age >= 18) {
   
//     console.log(age);
//     return 'You are an adult';
//   }
//   // return 'You are an adult';
// }
// console.log(checkAge(16));
// function checkStorage(available, ordered) {
//   if (available < ordered) {
//     return 'Not enough goods in stock!';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }
// console.log(checkStorage());
// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }
// console.log(checkStorage(80, 80));
// function checkPassword(password) {
//   const correctPassword =
//     'jqueryismyjam' === password
//        ? `Access granted`
//       : `Access denied, wrong password!`;
//   return correctPassword;
// }
// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));


// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case "professional":
//       return 20;
//       break;
//     case "organization":
//       return 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('random'));


// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);

// function hasDiscount(age, isStudent, isPensioner) {

// }



// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

// function canRegisterOnSite(age, hasAcceptedTerms) {
//     return age >= 13 && hasAcceptedTerms;
// }
// console.log(canRegisterOnSite(14, true));



// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.
// function checkString(value) {
//     isString = typeof value === "string" && !value.includes("$") ? `length: ${value.length}` : "input not correct";
//     return isString;
// }
// console.log(checkString("vvvv$hh"));

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

// function calculateSquare(value) {
//     const numberValue = Number.parseFloat(value);
//     console.log(numberValue);
//     if (isNaN(numberValue)) {
//         console.log('Invalid input!');
//     } else {
//         const squaredNumber = Math.pow(numberValue, 2);
//         console.log(squaredNumber);
//     }
// }
// console.log(calculateSquare(12.67));
// console.log(calculateSquare("sfgsgg123"));
// console.log(calculateSquare("13.4dgadx"));


// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"
// function isEvenNumber(number) {
//      if (typeof number === 'number') {
//        return number % 2 ? 'Число парне' : 'Число непарне';
//      } else {
//         return'Невалідне значення';
//     }
// }
// console.log(isEvenNumber(2));
// console.log(isEvenNumber(5));

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i > min; i--) {
    
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//      total += i;
// }
//  console.log(total);

// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// let total = 0;
// for (let i = 1; i < 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//          total += i;
//     }
   
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${total}`);


// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

// function getCountryInfo(country) {
//   let info;
//   switch (country) {
//     case 'China':
//       info = 'Китай - найбільша країна за населенням у світі.';
//       break;
//     case 'Australia':
//       info = 'Австралія - найбільший острів та країна в Океанії.';
//       break;
//     case 'France':
//       info = 'Франція відома своєю гастрономією та мистецтвом.';
//       break;
//     case 'Germany':
//       info = 'Німеччина - найбільша економіка в Європі.';
//       break;
//     case 'Canada':
//       info = 'Канада - друга за площею країна у світі, відома своєю природою.';
//       break;
//     default:
//       info = 'Інформація про цю країну відсутня.';
//   }
//   return info;
// }
// console.log(getCountryInfo('France'));

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//     const hours = Math.floor(minutes / 60);
//     const modHours = String(hours).padStart(2, "0");
//     const modMinutes = String(minutes % 60).padStart(2, "0")
//     console.log(modHours);
// return `${modHours}:${modMinutes}`;
// }
// formatMinutesToTime(70);
// console.log(formatMinutesToTime(70));

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);

// console.log((!1 && 2) || !3);
// console.log(!3);

// console.log(25 || (null && !3));

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || (null && !3 && undefined) || 5);

// console.log((5 === 5 && 3 > 1) || 5);

// for (let i = 6; i > 3; i--) {}
// console.log(i);

/////////////
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }
// console.log((hamburger === 3 && cola) || (fries === 3 && nuggets));
/////////////////////////////////////////////////////////
// Выполняется ли условие?

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }
// console.log(hamburger || cola || fries === 3 || nuggets);

// Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
// А без значения там undefined, напоминаю 🙂
//////////////////////////////////
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if ((hamburger && cola) || (fries === 3 && nuggets)) {
//   console.log('Done!');
// }
// //       hamburger/undefined       fries === 3/false   
// console.log((hamburger && cola) || (fries === 3 && nuggets));
