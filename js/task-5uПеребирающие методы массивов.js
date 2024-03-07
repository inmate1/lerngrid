function makePizza() {
  return 'Your pizza is being prepared, please wait.';
}

const result = makePizza();
const pointer = makePizza;
console.log(result);
console.log(pointer);
////////////////////////////////////////
//✅ Колбек - функции;
function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
															 // "Welcome Mango!"

registerGuest("Mango", notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"
//////////////
//✅
Функция makeMessage принимает один параметр имени доставляемой пиццы pizzaName и возвращает строку с уведомлением клиента.

Дополни функцию makeMessage таким образом, чтобы она ожидала второго параметра(параметр callback) колбек - функцию и возвращала результат ее вызова.Функции deliverPizza либо makePizza будут передаваться как колбек для makeMessage и ожидать аргументом имя доставляемой готовой пиццы.

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
console.log(makeMessage("Royal Grand", makePizza)); //возвращает строчку "Pizza Royal Grand is being prepared, please wait..."
console.log(makeMessage("Ultracheese", deliverPizza)); //возвращает строчку "Delivering Ultracheese pizza."
///////////////////////////////////////////////
// ✅Функция makePizza имеет два параметра: pizzaName имя пиццы callback и колбек-функцию. Во время исполнения makePizza вызывает этот колбек, передавая ему pizzaName как аргумент.
// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбек-функцию eatPizza(pizzaName). Колбек eatPizza логирует строку "Eating pizza <назва піци>", где <назва піци>это значение параметра pizzaName.
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});
// Объявленная функцияmakePizza
// Функция makePizzaпринимает два параметра
// Вторым аргументом при вызове makePizza("Ultracheese")передана функция eatPizzaс единственным параметромpizzaName
///////////////////////////////////////////
// ✅Метод forEach(callback)
const numbers = [5, 10, 15, 20, 25];

// Класичний for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Index ${i}, value ${numbers[i]}`);
}

// Перебираючий метод forEach
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});
// ✅Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.
// Доповни виклик метода forEach, передавши йому колбек - функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (number) {
    totalPrice += number;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
/////////////////////////////////////////////////////////////////////////////////////
// ✅
Функция filterArray(numbers, value)принимает первым параметром массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше значения второго параметра числа value. Если такие значения не найдены, функция возвращает пустой массив.

Выполни рефакторинг функции таким образом, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) { 
  const newArray = [];
  numbers.forEach(function (number) {

    if (number > value) {
      newArray.push(number);
    } 
      newArray;
  });
  return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
////////////////////////////////////////////////////////////////////////////////
// ✅Выполни рефакторинг функции calculateTotalPrice()таким образом, чтобы она была объявлена ​​как стрелочная.

// function calculateTotalPrice(quantity, pricePerItem)
const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};

console.log(calculateTotalPrice(5, 100)); //возвращает500
console.log(calculateTotalPrice(8, 60)); //возвращает480
console.log(calculateTotalPrice(3, 400)); //возвращает1200
///////////////////////////////////////////////////////////////
// ✅Неявное возвращение
// Выполни рефакторинг функции calculateTotalPrice()таким образом, чтобы она использовала неявный возврат.
// Объявленная переменнаяcalculateTotalPrice
// Сменной calculateTotalPriceприсвоена стрелочная функция с параметрами(quantity, pricePerItem)
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem; 

// В функции использован неявный возврат
console.log(calculateTotalPrice(5, 100)); //возвращает500
console.log(calculateTotalPrice(8, 60)); //возвращает480
console.log(calculateTotalPrice(3, 400)); //возвращает1200
/////////////////////////////////////////////////////////////////
// ✅Выполни рефакторинг функции calculateTotalPrice(orderedItems), заменив ее объявление на стрелочную функцию. Также замени колбек-функцию, передаваемую в метод forEach()на стрелочную функцию.
Объявленная переменная calculateTotalPrice
Переменной calculateTotalPrice присвоена стрелочная функция с параметром (orderedItems)
Для переборки массива orderedItems использован метод forEach
Колбек для метода forEach – это стрелочная функция.

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([12, 85, 37, 4])); //возвращает138
console.log(calculateTotalPrice([164, 48, 291])); //возвращает503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //возвращает1116
////////////////////////////////////////////////////////////////////////////
// ✅А теперь давай рассмотрим задачу "фильтр чисел"?
Замени объявления функции filterArray() и колбека для метода forEach()на стрелочные функции.
Объявленная переменнаяfilterArray
Сменной filterArrayприсвоена стрелочная функция с параметрами (numbers, value)
Для переборки массива numbersиспользован методforEach
Колбек для метода forEach– это стрелочная функция.

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); //возвращает[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //возвращает[5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //возвращает[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //возвращает[41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //возвращает[24, 41, 76]
////////////////////////////////////////////////////////////////////////////
// ✅Функция changeEven(numbers, value)принимает массив чисел numbers и обновляет каждый элемент, значение которого – это четное число, добавляя к нему значение параметра value, который точно является числом.
Выполни рефакторинг функции таким образом, чтобы она стала чистой – не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновленными значениями.
function changeEven(numbers, value) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
}
const changeEven = (numbers, value) => {
  const newArray = [];
   for (let i = 0; i < numbers.length; i += 1) {
     if (numbers[i] % 2 === 0) {
       newArray.push(numbers[i] + value);
     } else {
       newArray.push(numbers[i]);
     }
  }
  return newArray;
}

console.log(changeEven([1, 2, 3, 4, 5], 10)); //возвращает новый массив [1, 12, 3, 14, 5]
console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //возвращает новый массив [12, 18, 3, 7, 14, 16]
console.log(changeEven([17, 24, 68, 31, 42], 100)); //возвращает новый массив [17, 124, 168, 31, 142]
console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //возвращает новый массив [144, 13, 81, 192, 136, 154]


const array = [12, 24, 8, 41, 76];
array.map(function (currentValue, index, array) {
console.log(currentValue);
console.log(index);
console.log(array);
});
///////////////////////////////////////////////////////////
✅Метод map()
В массиве planets хранятся названия планет.Дополни код таким образом, чтобы в переменной planetsLengths получился массив, состоящий из длин названий каждой планеты из массива planets.Обязательно используй метод map().
Объявленная переменная planets
Значение переменной planets – это массив ["Earth", "Mars", "Venus", "Jupiter"]
Объявленная переменна planetsLengths
Значение переменной planetsLengths – это массив[5, 4, 5, 7]

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = [];
planets.map((planet,index, array) => {
  planetsLengths.push(planet.length);
  console.log(planetsLengths);
});

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths  = planets.map(planet => 
 planet.length);
console.log(planetsLengths);
/////////////////////////////////////////////
✅Метод map()
Массив books содержит коллекцию объектов книг, каждый из которых содержит свойства title, author, rating. Используя метод map(), сделай так, чтобы в переменной titles получился массив названий всех книг (свойство title) из массива books.

Объявленная переменнаяbooks
Значение переменной books– это массив
Объявленная переменнаяtitles
Значение переменной titles– это массив["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const titles = books.map(book => book.title);
console.log(titles);
//////////////////////////////////////////////////////////////////////////////
✅Метод flatMap()
Массив books содержит коллекцию объектов книг, каждый из которых содержит свойство genres, значением которого является массив жанров.Используя метод flatMap(), сделай так, чтобы в переменной genres получился массив жанров всех книг(свойство genres) из массива books.

Объявленная переменная books
Значение переменной books – это массив объектов
Объявленная переменная genres
Значение переменной genres– это массив ["adventure", "history", "fiction", "horror", "mysticism"]
Для переборки массива books используется метод flatMap()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];

const genres = books.flatMap(book => book.genres);
console.log(genres);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// const getUserEmails = (users).map(user => user.email);
const getUserEmails = (users) => {
 return users.map(user => user.email);
};

console.log(getUserEmails(users));
////////////////////////////////////////////////////
✅Метод filter()
Дополни код так, чтобы в переменной evenNumbersбыл массив четных чисел из массива numbers, а в переменной oddNumbers— массив нечетных.Обязательно используй метод filter().
Объявлен переменнуюevenNumbers
Объявлен переменнуюoddNumbers

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

Значение переменной evenNumbers– это массив[24, 82, 36, 18, 52]
Значение переменной oddNumbers– это массив[17, 61, 47, 73]
/////////////////////////////////////////////////
✅Метод filter()
Рассмотрим пример, где есть массив студентов с баллами за тест. Необходимо отфильтровать студентов, имеющих:
высокие баллы (от 80 (включительно)),
низкие баллы (ниже 50),
средние баллы(от 50(включительно) до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students.filter(student => student.score >= HIGH_SCORE);
console.log(best); // Масив об'єктів з іменами Mango і Kiwi

const worst = students.filter(student => student.score < LOW_SCORE);
console.log(worst); // Масив з одним об'єктом Ajax

// У колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Масив об'єктів з іменами Poly і Houston
///////////////////////////////////////////////////////////////////////////////
✅Метод filter()
Массив books содержит коллекцию объектов книг, каждый из которых содержит свойства title, author, rating.Используя метод filter(), дополни код таким образом, чтобы:

В переменной topRatedBooks образовался массив книг, рейтинг которых (свойство rating) больше или равен значению переменной MIN_RATING.
В переменной booksByAuthor образовался массив книг, написанных автором с именем (свойство author), которое совпадает со значением в переменной AUTHOR.
Объявленная переменная books
Значение переменной books – это массив объектов
Объявленная переменная MIN_RATING
Значение переменной MIN_RATING – это число8
Объявленная переменная AUTHOR
Значение переменной AUTHOR – это строка"Bernard Cornwell"
Объявленная переменная topRatedBooks
Значение переменной topRatedBooks- это массив книг с рейтингом выше 8
Объявленная переменная booksByAuthor
Значение переменной booksByAuthor– это массив книг, автор которых "Bernard Cornwell"
Для переборки массива books использован метод filter()

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(topRatedBooks);
console.log(booksByAuthor);

✅Метод filter()
Дополни код функции getUsersWithAge(users, minAge, maxAge), чтобы вернуть массив пользователей, возраст(сохраненный в свойстве age) которых попадает в заданный диапазон minAge от maxAge.

Из-за:
Используй метод filter() для создания нового массива, в котором хранятся только элементы, удовлетворяющие определенному условию.
Используй операторы >= (больше или равно) и <= (меньше или равно), чтобы отфильтровать пользователей, возраст которых точно попадает в диапазон между минимальным minAge и максимальным maxAge значениями.
Объявленная переменная getUsersWithAge
Переменной getUsersWithAge присвоена стрелочная функция с параметрами(users, minAge, maxAge)
Для переборки параметра users используется метод filter()
Если значения параметров minAgeи maxAge равны 20 и 30 соответственно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma HeadиCarey Barr
Если значения параметров minAgeи maxAge равны 30 и 40 соответственно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson,Sheree Anthony
Если значения параметров minAge и maxAge равны 80 и 100 соответственно, функция возвращает пустой массив
Вызов функции со случайными, но валидными аргументами возвращает правильное значение
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
]
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};
console.log(getUsersWithAge(users, 30, 40));
//////////////////////////////////////////////////////
✅Метод find()
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined
////////////////////////////////////////////////////////////////
✅Метод every()
const products = [
	{ name: "apple", quantity: 2 },
	{ name: "orange", quantity: 5 },
	{ name: "plum", quantity: 0 },
];

const hasEveryProduct = products.every(product => product.quantity > 0);
console.log(hasEveryProduct); // false
////////////////////////////////////// пример
const isEveryUserActive = (users) => {
  return users.every(user => user.isActive === true)
};
✅Метод some()
// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Чи є хоча б один елемент, що менший від нуля? - ні
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Чи є хоча б один елемент, що менший від нуля? - так
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true
////////////////////////////////////////////////////////////
✅Метод reduce()
const total = [2, 7, 3].reduce((previousValue, Number) => { 
  return previousValue + Number; 
}, 0); 

console.log(всего); // 12
///////////////////////////////////////////////////////////////
Игровому сервису необходим функционал подсчета среднего времени, проведенного в играх одним игроком. В переменной players хранится объект, где ключ это имя игрока, а значение – его игровое время. В переменной playtimes хранится массив значений объекта players, то есть массив игрового времени всех игроков. Значением переменной averagePlayTime будет среднее время, проведенное одним игроком в играх.

Дополни код таким образом, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes. Используй метод reduce().

Объявленная переменная players
Значение переменной players – это объект игроков с игровым временем каждого
Объявленная переменная playtimes
Значение переменной playtimes – это массив[1270, 468, 710, 244]
Объявленная переменная totalPlayTime
Значение переменной totalPlayTime – это число 2692
Для переборки массива playtimes используется метод reduce()
Объявленная переменная averagePlayTime
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousValue, playtime) => {
  return previousValue + playtime;
},0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);
/////////////////////////////////////////////////////////
✅Метод  reduce() и массив объектов
В переменной хранится массив объектов , players каждый из которых обладает свойствами name, playtime и gamesPlayed

Нашему сервису необходимо рассчитать среднее время, проведенное в одной игре для каждого игрока, и получить общую сумму этих значений времени в переменной totalAveragePlaytimePerGame. Рассчитать время для каждого из игроков можно, разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
Советы:
Используй метод reduce()для итерации по массиву playersи расчета общей суммы среднего времени на одну игру.
Внутри колбек функции reduce(), раздели playtime игрока на gamesPlayed, чтобы получить среднее время, затраченное на одну игру каждым игроком.
Накапливай результат в переменной accи возвращай его в конце каждой итерации.
Инициализируй параметр acc метода reduce() начальным значением 0 во избежание получения NaN при выполнении вычислений.
В результате переменная totalAveragePlaytimePerGame будет содержать общую сумму среднего времени на одну игру для всех игроков.
Объявленная переменная players
Значение переменной players – это массив объектов игроков
Объявленная переменная totalAveragePlaytimePerGame
Значение переменной totalAveragePlaytimePerGame – это число 1023
Для переборки массива players используется метод reduce()
const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  console.log(player);
  return acc + (player.playtime / player.gamesPlayed);
}, 0);
console.log(totalAveragePlaytimePerGame);
/////////////////////////////////////////////////////////////
✅Метод  reduce() и массив объектов
Дополни функцию calculateTotalBalance(users)таким образом, чтобы она считала и возвращала сумму всех средств (свойство balance), которые хранят пользователи из массива users.

Объявленная переменная calculateTotalBalance
Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users)
Для переборки параметра users используется метод reduce()
Вызов функции с указанным массивом пользователей возвращает число 20916

const usersGame = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];
const calculateTotalBalance = (users) => {
  return users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
};
console.log(calculateTotalBalance(usersGame));
// const calculateTotalBalance = usersGame.reduce((previousValue, userGame) => {
 
//     // console.log(userGame);
//     return previousValue + userGame.balance;
//   }, 0);

// const calculateTotalBalance = (users) => {
//   const total = users.reduce(
//     (totalBalance, user) => totalBalance + user.balance,
//       0);
//     return total;
// };

// console.log(calculateTotalBalance);
//////////////////////////////////////////////////////
✅Метод toSorted()
Переменная releaseDates – это массив чисел, лет издания книг. Переменная authors – это массив строк, авторов книг.

Дополни код таким образом, чтобы в переменной ascendingReleaseDates получилась копия массива releaseDates, отсортированная по возрастанию, а в переменной alphabeticalAuthors – копия массива имен авторов authors, отсортированная по алфавиту. Используй метод toSorted()

Объявленная переменная releaseDates
Значение переменной releaseDates – это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
Объявленная переменная authors
Значение переменной authors – это массив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
Объявленная переменная ascendingReleaseDates
Значение переменной ascendingReleaseDates – это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
Объявленная переменная alphabeticalAuthors
Значение переменной alphabeticalAuthors – это массив ["Bernard Cornwell", "Fyodor Dostoevsky", "Robert Sheckley", "Tanith Lee"]
Использованный метод toSorted()

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();

const alphabeticalAuthors = authors.toSorted();
console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);
// ////////////////////////////////////////////
✅Метод toSorted()порядок сортировки чисел array.toSorted((a, b) => { 
  // Тело функции обратного вызова 
});

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
Сортировка по убыванию
const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
✅Метод toSorted() Свой порядок сортировки строк
const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];

const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));
/////////////////////////////
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((a, b) => a.title.localCompare(b.title));

const sortedByReversedAuthorName = books.toSorted((a, b) => b.title.localCompare(a.title));

const sortedByAscendingRating = books.toSorted((a, b) => a.reting - b.rating);

const sortedByDescentingRating = books.toSorted((firstElement, secondElement) => secondElement.rating - firstElement.rating);

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

const sortedByDescentingRating = books.toSorted((firstElement, secondElement) => secondElement.rating - firstElement.rating);
// console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
✅Метод Цепочки методов
Массив books содержит массив объектов книг, каждый из которых содержит свойства title, author, rating.

Дополни код таким образом, чтобы в переменной names получился массив имен авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING. Используй цепочку методов.

Объявленная переменная books
Значение переменной books – это исходный массив объектов
Объявленная переменная MIN_BOOK_RATING
Значение переменной MIN_BOOK_RATING – это число 8
Объявленная переменная names
Значение переменной names – это массив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
Переменная names должна формироваться с помощью цепочки методов filter, map, toSorted, при этом другие переменные не должны объявляться
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(authors => authors.author)
  .toSorted((a, b) => a.localeCompare(b));
 
console.log(names);
  
