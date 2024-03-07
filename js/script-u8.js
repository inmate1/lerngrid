Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
////////////////////////////////////////////////////////////
function getTimeFromMinutes(minutes) {
if (typeof minutes !== "number" || !Number.isInteger(minutes) || minutes < 0 ) {
    return "Ошибка, проверьте данные";
} else {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
       let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${min} минут`;
}
}
console.log(getTimeFromMinutes(150)); // => "Это 2 часа и 30 минут"
console.log(getTimeFromMinutes(50)); // => "Это 0 часов и 50 минут"
console.log(getTimeFromMinutes(0)); // => "Это 0 часов и 0 минут"
console.log(getTimeFromMinutes(-150)); // => "Ошибка, проверьте данные"

2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
function findMaxNumber(a, b, c, d) {
    if ((typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number') || arguments.length < 4) {
        return 0;
    } else {
        let maxNum = d; //Number.NEGATIVE_INFINITY;
        // const array = Array.from(arguments);
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > maxNum) {
                maxNum = arguments[i];
            }           
        }
         return maxNum;
    }      
}

console.log(findMaxNumber(1, 5, 6.6, 11)); // =>  11
console.log(findMaxNumber(1, 5, '6', '10')); //  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS.Подходит любое:)
function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');