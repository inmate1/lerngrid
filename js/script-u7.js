Задачи:

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться.Это из - за того, что этот оператор из более нового стандарта, чем тут доступен.
/////////////////////////////////////////////////////////////////////////////
function calculateVolumeAndArea(edge) {
    let message;
    if (typeof(edge) === "number" && edge > 0 && Number.isInteger(edge)) {
        const size = Math.pow(edge, 3); 
        const area = 6 * (Math.pow(edge, 2));
        message = `Объем куба: ${size}, площадь всей поверхности: ${area}`;
    } else {
        message = 'При вычислении произошла ошибка';
    }
    return message;
}
Примеры:
console.log(calculateVolumeAndArea(5)); //  => 'Объем куба: 125, площадь всей поверхности: 150'
console.log(calculateVolumeAndArea(15)); //  => 'Объем куба: 3375, площадь всей поверхности: 1350'
console.log(calculateVolumeAndArea(15.5)); //  => 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea('15')); //  => 'При вычислении произошла ошибка'
console.log(calculateVolumeAndArea(-15)); //  => 'При вычислении произошла ошибка'

2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
Функция принимает только целое число от 1 до 36.
Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
"Ошибка. Проверьте правильность введенного номера места"
Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий, но смысл остается таким же.
/////////////////////
function getCoupeNumber(numPlace) {
    let coupe;
if (numPlace > 0 && numPlace <= 36 && typeof(numPlace) === "number" && Number.isInteger(numPlace)) {
    coupe = Math.ceil(numPlace / 4);
} else if (typeof(numPlace) !== "number" || !Number.isInteger(numPlace) || numPlace < 0) {
    coupe = "Ошибка. Проверьте правильность введенного номера места";     
} else if (numPlace === 0 || numPlace > 36) {
    coupe = "Таких мест в вагоне не существует";
    
    }
    return coupe;
}
console.log(getCoupeNumber(33)); //  => 9
console.log(getCoupeNumber(7)); //  => 2
console.log(getCoupeNumber(300)); //  => "Таких мест в вагоне не существует"
console.log(getCoupeNumber(0)); //  => "Таких мест в вагоне не существует"
console.log(getCoupeNumber(7.7)); //  => "Ошибка. Проверьте правильность введенного номера места"
console.log(getCoupeNumber(-10)); //  => "Ошибка. Проверьте правильность введенного номера места"
console.log(getCoupeNumber('Hello')); //  => "Ошибка. Проверьте правильность введенного номера места"

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);