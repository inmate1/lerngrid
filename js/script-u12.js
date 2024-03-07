// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

// const someString = 'This is some strange string';

// function reverse(str) {
//     console.log(str.length);
//   return typeof str === 'string'
//     ? str.split('').reverse().join(''): `Ошибка!`;
// }


// // function reverse(str) {
// //   if (typeof str !== 'string') {
// //     return 'Ошибка!';
// //   }
// //   // Самый оптимальный вариант решения
// //   return str.split('').reverse().join('');

// //   // Решение при помощи цикла
// //   // let newStr = '';
// //   // for (let i = str.length - 1; i >= 0; i--) {
// //   //     newStr += str[i];
// //   // }
// //   // return newStr
// // }
// console.log(reverse(someString));

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку


// const ddd = [];
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//         let str = '';
//     arr.length === 0 ? str = `Нет доступных валют` : str = `Доступные валюты:\n`;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === missingCurr) {
//              continue;
//         }
//         str += `${arr[i]}\n`;
//     }

//     return str;
//    }
// //    console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));     
// console.log(availableCurr([additionalCurrencies], 'CNY'));

const baseCurrencies = ['USD', 'EUR',];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function (curr, i) {
        console.log(curr);
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log(availableCurr(additionalCurrencies, 'RUB'));
 console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
