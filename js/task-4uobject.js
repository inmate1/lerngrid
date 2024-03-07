// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
///////////////////////////////////////////////////////////
// Дополни код, обновив значения свойств объекта apartment:
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
////////////////////////////////////
// Операция добавления нового свойства после создания объекта ничем не отличается от изменения значения существующего свойства.
// Если при записи значения по ключу такое свойство отсутствует в объекте, оно будет создано.
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = 'en';
book.translations = ['ua', 'ru'];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]
console.log(book);

///////////////////////////////////////////////////////////
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.area = 60;
apartment.rooms = 3;
apartment.location;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};
//Вычислительные свойства
// const propName = "name";
// const user = {
//   age: 25,
//   // ключ цієї властивості буде взято зі значення змінної propName
//   [propName]: "Henry Sibola",
// };

// console.log(user.name); // "Henry Sibola"

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }
/////////////////////////////////////////
//Перебери объект apartment, используя цикл for...in, и запиши в массив keysвсе его ключи, а в массив valuesвсе значения его свойств.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(keys);
//   console.log(values);
// }
/////////////////////////////////////////
// Метод Object.keys()
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys);
// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }
///////////////////////////////////////////////
// Перебери объект apartment, используя метод Object.keys()и цикл for...of. Запиши в переменную keys массив ключей свойств объекта apartment и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key])
//   console.log(key);
//   console.log(values);
// }
///////////////////////////////////////////////////////
// Выполни рефакторинг функции countProps(object), заменив перебор ключей с помощью цикла for…in на метод Object.keys()для получения массива свойств. Функция должна вернуть количество свойств в объекте object.
// function countProps(object) {
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }
// console.log(countProps({})); //возвращает0
// console.log(countProps({ name: "Mango", age: 2 })); //возвращает2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //возвращает3

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys){
//   // console.log(key); // Ключ
//   // console.log(book[key]); // Значення властивості
//   const values = Object.values(book);
//   console.log(values);
// }
////////////////////////////////////////
// Запиши в переменную keys массив ключей свойств объекта apartment, а в переменную values– массив их значений.Используй методы Object.keys()и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);
/////////////////////////////////////////////
// Функция countTotalSalary(salaries)принимает объект заработной платы ( salaries) в качестве параметра. Каждое свойство объекта salaries— это ключ, содержащий имя сотрудника, и значение его соответствующая зарплата.
// Дополни код функции countTotalSalary(salaries)так, чтобы она возвращала общую сумму зарплат всех сотрудников.
// Из-за:
// Инициализируй переменную totalSalaryсо значением 0, которая будет отвечать за общую сумму зарплат всех сотрудников
// Используй метод Object.values()для получения значений (зарплат) с объектаsalaries
// Пройдись по полученным значениям с помощью цикла и добавь каждое значение к переменной totalSalary.
// Верни totalSalaryкак результат
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const values = Object.values(salaries);
  for (const value of values) {
    totalSalary += value;
  }
  return totalSalary;
}
console.log(countTotalSalary({})); //возвращает0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //возвращает330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //возвращает400
//////////////////////////////////////////////////
// Массив объектов
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
];
for (const book of books) {
  console.log(book); // Об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}
////////////////////////////////////////////////////////////
// Массив colors содержит цветовую коллекцию. Каждый цвет представлен объектом и имеет свойства hex и rgb с подходящими для этого формата и цвета значениями.
// Перебери массив объектов colors, используя цикл for...of. Добавь в массив hexColors значение свойств hex, а в массив rgbColors– значение свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const key of colors) {
//   // console.log(key);
//     hexColors.push(key.hex);
//     rgbColors.push(key.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);
///////////////////////////////////////////////
// Поиск объекта по значению свойства
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }

// Функция getProductPrice(productName)принимает один параметр productName – название продукта. Функция содержит массив объектов products с такими свойствами, как name имя товара, price цена и quantity количество.
// Дополни код функции так, чтобы она искала объект продукта с определенным именем (свойство name) в массиве products и возвращала его цену(свойство price).Если продукт не найден, функция должна возвращаться null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const iterator of products) {
//     if (iterator.name === productName) {
//       console.log(iterator.name === productName);
//       return iterator.price;

//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar")); //возвращает 1300.
// console.log(getProductPrice("Grip")); //возвращает 1200.
// console.log(getProductPrice("Scanner")); //возвращает 2700.
// console.log(getProductPrice("Droid")); //возвращает 400.
// console.log(getProductPrice("Engine")); //возвращает null.
///////////////////////////////////////////////////////////////////
// Коллекция значений свойства
// Напиши функцию getAllPropValues(propName), которая принимает один параметр propName– имя(ключ) свойства.Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.Если в объектах отсутствуют свойства с таким именем, то функция должна вернуть пустой массив.

function getAllPropValues(propName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  const array = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      // console.log(product[propName]);
      array.push(product[propName]);
    }
  }


  return array;
}

console.log(getAllPropValues('name')); //возвращает ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); //возвращает[4, 3, 7, 9]
// console.log(getAllPropValues("price")); //возвращает[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //////возвращает[]
///////////////////////////////////////////////////////////////////////

// Функция calculateTotalPrice(productName)принимает один параметр productName – название товара. Функция содержит массив объектов products с такими свойствами, как name имя товара, price цена и quantity количество.
// Дополни код функции так, чтобы она возвращала общую стоимость (цена*количество) товара с таким именем из массива products.
// Если продукта с таким названием нет, то функция должна возвращать строку "Product <productName> not found!", где <productName>это имя товара.

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  let totalPrice;
  for (const product of products) {
    console.log(product.name === productName);
    if (product.name === productName) {
      return product.price * product.quantity;
    } 
  }
 return `Product ${productName} not found!`;
}

// console.log(calculateTotalPrice("Blaster")); //возвращает"Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); //возвращает5200
// console.log(calculateTotalPrice("Droid")); //возвращает2800
// console.log(calculateTotalPrice("Grip")); //возвращает10800
// console.log(calculateTotalPrice("Scanner")); //возвращает8100

// Створимо об’єкт bookShelf для колекції книг books і методів взаємодії з колекцією getBooks і addBook.
// ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// bookShelf.getBooks(); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
// bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
// console.log(bookShelf);
//✅
// const atTheOldToad = {
//   potions: ['Speed potion', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };
// console.log(atTheOldToad.getPotions());
// atTheOldToad.addPotion("jjjjj");
// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad);

//✅Заказчик хочет, чтобы каждое зелье было представлено не только именем, но и ценой. Поэтому сейчас в качестве potionsбудет сохраняться массив объектов со свойствами nameи price.

// Объект atTheOldToad обладает следующими свойствами:

// potions— массив строк, с названиями зилья
// getPotions()— метод, возвращающий значение свойств аpotions
// addPotion()— метод, принимающий параметр объекта нового зелья newPotion и добавляющий его в конец массива в свойстве potions.
// Добавь метод getTotalPrice(), который должен возвращать общую стоимость всех зелий по свойству potions.

// Объявленная переменнаяatTheOldToad
// Значение переменной atTheOldToad– это объект
// Значение свойства atTheOldToad.getPotions– это метод объекта
// Вызов метода atTheOldToad.getPotions()возвращает текущее значение свойстваpotions
// Значение свойства atTheOldToad.addPotion– это метод объекта.
// После вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 })в массиве potionsпоследним элементом будет этот объект
// После вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 })в массиве potionsпоследним элементом будет этот объект
// Значение свойства atTheOldToad.getTotalPrice– это метод объекта
// Вызов метода atTheOldToad.getTotalPrice()возвращает общую стоимость всех зелий по свойствуpotions

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for (const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice; 
//   },
// };
// console.log(atTheOldToad.getTotalPrice());
////////////////////////////////////////////////
// ✅Изменение объекта в массиве
const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};

bookShelf.changeRating("The Mist", 9);
bookShelf.changeRating("The Last Kingdom", 4);
console.log(bookShelf);
////////////////////////////////////////////////////////
// ✅Объект atTheOldToadобладает следующими свойствами:
/**potions— массив объектов зелья
getPotions()— метод, возвращающий значение свойства potions
updatePotionName()— метод, принимающий два параметра строк oldNameиnewName
Дополни метод updatePotionName(oldName, newName)таким образом, чтобы он обновлял название зелья из oldNameмассива newNameзелья в свойстве potions.*/
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name == oldName) {
        potion.name = newName;
      }
    }
  },
};
atTheOldToad.updatePotionName('Stone skin', 'Invisibility');
atTheOldToad.updatePotionName('Speed potion', 'Polymorth');
console.log(atTheOldToad);
/**После первого вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), в свойстве potionsбудет массив[{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
После второго вызова метода atTheOldToad.updatePotionName("Speed potion", "Polymorth"), в свойстве potionsбудет массив[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]*/
/////////////////////////////////////////
/**✅Используя синтаксис остаточных параметров, дополни код функции add()так, чтобы она принимала любое количество аргументов в параметр argsи возвращала их сумму.
Объявленная функция add
Функция add объявляет параметр args
Для сбора аргументов в переменную args в подписи функции используется синтаксис остаточных параметров*/

function add(...args) {
  const array = Array.from(arguments);
  // console.log(array);
  let sum = 0;
  for (const iterator of array) {
    sum += iterator;  
  }
  return sum;
}


console.log(add(15, 27)); //возвращает42
console.log(add(12, 4, 11, 48)); //возвращает75
console.log(add(32, 6, 13, 19, 8)); //возвращает78
// Функция addOverNum()принимает случайное количество аргументов чисел.
/////////////////////////////////////////////////////////////////////
/**✅Дополни код функции таким образом, чтобы она вычисляла сумму только тех аргументов, которые больше заданного числа. Это число всегда будет передано первым аргументом.
Для решения этой задачи тебе нужно сделать следующее:
Первый параметр value должен представлять заданное число, а остальные аргументы должны быть собраны с помощью синтаксиса ( ...args).
Внутри функции инициализируй переменную для хранения общей суммы
Затем пройдись по каждому аргументу с помощью цикла
Проверь, каждый аргумент больше указанного числа, и если да, добавь его к общей сумме
В завершение верни общую сумму
Объявленная функцияaddOverNum()
Функция addOverNumпринимает следующие параметры: value,...args*/
function addOverNum(value, ...args) {
  let sumBigNumber = 0;
  const array = Array.from(arguments);
  for (const iterator of array) {
    if (value < iterator) {
      sumBigNumber += iterator;
    }
    
  }
  return sumBigNumber;
}


console.log(addOverNum(50, 15, 27));  //возвращает0
console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));  //возвращает71
console.log(addOverNum(15, 32, 6, 13, 19, 8));  //возвращает51
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));  //возвращает218

/**✅Функция getExtremeScores(scores)принимает массив отметок (чисел) в параметре scores.

Дополни код функции так, чтобы она возвращала объект с двумя свойствами:
Свойство best должно содержать наибольшее число из массива.scores
Свойство worst должно содержать наименьшее число из массива scores.
Используй оператор ( ...spread) и методы Math.max()и Math.min().
Для передачи аргументов методам Math.max()и Math.min()используется синтаксис ...на массиве.scores*/
function getExtremeScores(scores) {
  const minNumber = Math.min(...scores);
  const maxNumber = Math.max(...scores);
  console.log(...scores);
  return { best: maxNumber, worst: minNumber}
}


console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //возвращает объект{ best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //возвращает объект{ best: 81, worst: 4 }

/**✅В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию, которые хранятся в переменной defaultSettings. При создании теста все или часть настроек можно переопределить, пользовательские настройки сохраняются в переменной overrideSettings.

Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределенные пользовательские настройки. Дополни код таким образом, чтобы в переменной finalSettingsобразовался объект финальных настроек теста.

Объявленная переменнаяdefaultSettings
Значение переменной defaultSettings– это объект
Объявленная переменнаяoverrideSettings
Значение переменной overrideSettings– это объект
Объявленная переменнаяfinalSettings
Значение переменной finalSettings– это объект
Значение свойства finalSettings.themeравно"light"
Значение свойства finalSettings.publicравно"false"
Значение свойства finalSettings.withPasswordравно"true"
Значение свойства finalSettings.minNumberOfQuestionsравно10
Значение свойства finalSettings.timePerQuestionравно30
Для присвоения значения переменной finalSettingsиспользуется синтаксис....*/

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);//{theme: 'light',public: false, withPassword: true,minNumberOfQuestions: 10, timePerQuestion: 30}