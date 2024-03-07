// Модуль 6. ООП. Классы
// ✅Контекст выполнения функции
// ✅Ключове слово this
// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.
// Метод checkPizza объекта pizzaPalace использует this.
// Метод order объекта pizzaPalace использует this

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//     checkPizza(pizzaName) {
//       console.log(this.pizzas.includes(pizzaName));
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };


// console.log(pizzaPalace.order("Smoked")); //возвращает строчку "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); //возвращает строчку "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); //возвращает строчку "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); //возвращает строчку "Sorry, there is no pizza named «Viennese»"
/////////////////////////////////////////////////////////////////






// ✅Прототипи
//  ✅Прототип об'єкта
// Измени код таким образом, чтобы объект parent стал прототипом для объекта в переменной сhild.

// Объявленная переменная parent
// Значение переменной parent – это объект
// Объявленная переменна яchild
// Значение переменной child – это объект
// Используется метод Object.create()




const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;
console.log(child);

// console.log(parent.hasOwnProperty("surname"));  //возвращаетtrue
// console.log(parent.hasOwnProperty("heritage"));  //возвращаетtrue
// console.log(child.hasOwnProperty("name"));  //возвращаетtrue
// console.log(child.name);  //возвращает "Jason"
// console.log(child.hasOwnProperty("age"));  //возвращаетtrue
// console.log(child.age);  //возвращает27
// console.log(child.hasOwnProperty("surname"));  //возвращаетfalse
// console.log(child.surname);  //возвращает"Moore"
// console.log(child.hasOwnProperty("heritage"));  //)возвращаетfalse
// console.log(child.heritage);  //возвращает"Irish"
// console.log(parent.isPrototypeOf(child));  //возвращаетtrue
////////////////////////////////////////////////////////////////////////////

✅Цепочки прототипов
Измени код, построив цепочку прототипов таким образом, чтобы объект ancestorбыл прототипом для parent, а тот, в свою очередь, был прототипом для child.

Объявленная переменнаяancestor
Значение переменной ancestor– это объект.
Объявленная переменнаяparent
Значение переменной parent– это объект.
Объявленная переменнаяchild
Значение переменной child– это объект.

const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(ancestor.isPrototypeOf("parent"));    //возвращает  false
console.log(parent.isPrototypeOf("child"));    //возвращает  false
console.log(ancestor.hasOwnProperty("surname"));    //возвращает  true
console.log(ancestor.surname);    //возвращает"Dawson"
console.log(parent.hasOwnProperty("surname"));    //)возвращает  true
console.log(parent.surname);    //возвращает"Moore"
console.log(child.hasOwnProperty("surname"));    //возвращает  false
console.log(child.surname);    //возвращает"Moore"
console.log(ancestor.hasOwnProperty("heritage"));    //возвращает  true
console.log(ancestor.heritage);    //возвращает"Irish"
console.log(parent.hasOwnProperty("heritage"));    //возвращает  false
console.log(parent.heritage);    //возвращает"Irish"
console.log(child.hasOwnProperty("heritage"));    //возвращает  false
console.log(child.heritage);    //возвращает"Irish"
// Используется методObject.create()


✅Классы

class User { 
  constructor(name, email) { 
    // Инициализация свойств экземпляра 
    this.name = name; 
    this.email = email; 
  } 
} 

const mango = new User("Mango", "mango@mail.com"); 
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' } 

const poly = new User("Poly", "poly@mail.com"); 
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

Таким образом, this внутри конструктора ссылается на вновь созданный объект.
Это позволяет придавать каждому объекту свойства с одинаковыми именами, но разными значениями.
Свойства nameи email называются публичными свойствами, поскольку они являются собственными свойствами объекта - экземпляра.
/////////////////////////////////////////////////////
Додай класу Car метод constructor, який приймає три параметри:
brand - марка автомобіля
model - модель автомобіля
price - ціна автомобіля
Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.
Оголошений клас Car
Клас Car має метод constructor

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

const kia = new Car("kia", "Soul", 10000);
console.log(kia);
console.log(new Car("Audi", "Q3", 36000)); // утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
console.log(new Car("BMW", "X5", 58900)); // утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
console.log(new Car("Nissan", "Murano", 31700)); // утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}


Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
Оголошений клас Car
Клас Car має метод constructor

class Car {
  constructor(param) {
    this.brand = param.brand;
    this.model = param.model;
    this.price = param.price;
  }
}

console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); // утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}

class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}


console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
//////////////////////////////////////////////
✅Методы класса
Добавь классу Car два метода.
getPrice()- возвращает значение свойства price объекта, который будет его вызывать.
changePrice(newPrice)- обновляет значение свойства price объекта, который будет вызывать его на значение параметра newPrice.
В классе Car объявлен метод getPrice

Метод getPrice возвращает значение свойства price экземпляра класса, его вызывающего
В классе Carо бъявлен метод changePrice
Метод changePrice изменяет значение свойства price экземпляра класса, его вызывающего

class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
  getModel() {
    return this.model;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
  changeModel(newModel) {
    this.model = newModel;
  }
}
const kia = new Car('Kia', 'Soul', 10000);
console.log(kia.getPrice());
kia.changePrice(2000);
console.log(kia.getPrice());
console.log(kia.getModel());
kia.changeModel("Rio");
console.log(kia.getModel());


✅Частные свойства
Выполни рефакторинг класса Car таким образом, чтобы свойство brand было частным, и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

getBrand()- возвращает значение частного свойства brand.
changeBrand(newBrand)- изменяет значение частного свойства brand на newBrand.
Объявленный класс Car
Свойство brand в классе Car объявлено частным
Конструктор класса принимает объект со свойствами brand и modelprice
У экземпляра отсутствует публичное свойство brand

class Car {
  #brand;
  // model;
  // price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  getBrand() {
    return this.#brand;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  changeBrand(newBrand) {
    this.#brand = newBrand;
    // return newBrand;
  }
}

console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 })); // образуется объект{ model: "Q3", price: 36000 }
console.log(new Car({ brand: 'bmw', model: 'X5', price: 58900 })); // образуется объект{ model: "X5", price: 58900 }
console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 })); // образуется объект{ model: "Murano", price: 31700 }

const audi = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
console.log(audi.getBrand()); //возвращает значение частного свойства brand
console.log(audi.changeBrand('Honda')); //изменяет значение частного свойства brand на "Honda"
console.log(audi.getBrand());
///////////////////////////////////////////////////////////////
✅Частные методы
class User { 
  name; 
  #email; 

  constructor({ name, email }) { 
    this.name = name; 
    this.#email = email; 
  } 

  // Публичный метод для получения электронной почты 
  getEmail() { 
    return this.#email; 
  } 

  // Публичный метод для изменения электронной почты 
  changeEmail(newEmail) { 
    if (this.#validateEmail(newEmail)) { 
      this.#email = newEmail; 
    } else { 
      console.log('Invalid email format'); 
    } 
  } 

  // Частный метод для валидации электронной почты 
  #validateEmail(email) { 
    return email.includes('@'); 
  } 
} 

const mango = new User({ 
  name: 'Mango', 
  email: 'mango@mail.com', 
}); 

// Попробуем изменить электронную почту 
mango.changeEmail('newmail.com'); // "Invalid email format" 
mango.changeEmail('new@mail.com'); 
console.log(mango.getEmail()); // "new@mail.com" 

// Прямой вызов приватного метода извне приведет к ошибке 
mango.#validateEmail('test'); // Ошибка

В этом примере приватный метод #validateEmail обеспечивает дополнительную логику для валидации электронной почты.


✅
Выполни рефакторинг класса Car. Дополнительно к частному свойству #brand сделай частными свойства model и price. Стандартизируй публичный интерфейс класса, заменив уже объявленные методы на геттеры и сеттеры brand, model и price для взаимодействия с частными свойствами.

Объявленный класс Car
В классе Car объявлено частное свойство brand
В классе Carо бъявлено частное свойство model
В классе Car объявлено частное свойство price
Конструктор класса принимает объект со свойствами brand и model и price
В классе Car объявлен геттер brand
В классе Car объявлен сеттер brand
В классе Car объявлен геттер model
В классе Car объявлен сеттер model
В классе Car объявлен геттер price
В классе Car объявлен сеттер price

class Car {
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }
   get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.model;
  }

  set model(newModel) {
    this.model = newModel;
  }

  get price() {
    return this.price;
  }

  set price(newPrice) {
    this.price = newPrice;
  }
}



✅Добавим пользовательскому классу частное свойство  role — его роль, определяющую набор прав, например: администратор, редактор, обычный пользователь и т.д.Возможные роли пользователей будем сохранять как статическое свойство  roles – объект со свойствами.

class User {
  static roles = {
    admin: "admin",
    editor: "editor",
		basic: "basic"
  };

  #email;
  #role;

  constructor({ email, role = User.roles.basic }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.roles.admin,
});

console.log(mango.role); // "admin"
mango.role = User.roles.editor;
console.log(mango.role); // "editor"
////////////////////////////////////////////////
✅Статические свойства
Выполни рефакторинг класса Car. Добавь публичное статическое свойство maxPriceсо значением число 50000– максимально допустимая цена автомобиля.

Добавь сеттеру priceпроверку значения newPriceпередаваемого параметра. Если оно больше maxPrice, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

Под объявлением класса мы добавили инициализации экземпляров и вызовы методов, чтобы показать, как будут использоваться гетеры и сеттеры price.
class Car {
  static maxPrice = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    newPrice > Car.maxPrice ? "" : this.#price = newPrice;
  }
}
console.log(Car.maxPrice);

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

✅Статические методы
Добавь классу Carпубличный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значение параметра priceи частного статического свойства maxPrice.

Если цена автомобиля превышает максимальное, метод должен вернуть строку "Error! Price exceeds the maximum".
В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать, как будет использоваться метод checkPrice(price).
class Car {
  static #maxPrice = 50000;
  static checkPrice(price) {
    return price > Car.#maxPrice ? "Error! Price exceeds the maximum"
      : "Success! Price is within acceptable limits";
}
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
console.log(Car.checkPrice(36000)); //возвращает строчку "Success! Price is within acceptable limits"
console.log(Car.checkPrice(18000)); //возвращает строчку "Success! Price is within acceptable limits"
console.log(Car.checkPrice(64000)); //возвращает строчку "Error! Price exceeds the maximum"
console.log(Car.checkPrice(57000)); //возвращает строчку "Error! Price exceeds the maximum"

✅Наслідування класів
У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

Оголоси клас Admin, який наслідує від класу User
Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
Оголошений клас Admin
Клас Admin наслідується від класу User
Клас Admin містить публічну статичну властивість role
Звернення до Admin.role.BASIC повертає рядок "basic"
Звернення до Admin.role.SUPERUSER повертає рядок "superuser"
class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
 static role = {BASIC: "basic", SUPERUSER: "superuser"}
}
/////////////////////////////////////////////
✅Конструктор дочернего класса
Добавь классу Admin метод constructor, который принимает один параметр-объект настроек с двумя свойствами emailи access. Добавь классу Admin публичное свойство access, значение которого будет передаваться при вызове конструктора.
Чтобы показать, как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.

Объявленный класс Admin
Класс Admin следует от класса User
Класс Admin содержит публичное статическое свойство role
Класс Admin содержит метод constructor с параметром в виде объекта {email, access}
В классе Admin в конструкторе для свойства email и спользуется обращение к конструктору родительского класса.
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  constructor({ email, access }) {
    super(email);
    this.access = access;
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"
console.log(Admin.role.BASIC); // возвращающей строке"basic"
Обращение к Admin.role.SUPERUSER возвращающей строке"superuser"

✅Методы дочернего класса
Додай класу Admin наступні властивості і методи.

Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

Оголошений клас Admin
class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  
  constructor({ email, access }) {
    super(email);
    this.access = access; 
    this.blacklistedEmails = [];
  }
   blacklist(email) {
     this.blacklistedEmails.push(email);
   }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
Клас Admin наслідує від класу User
Клас Admin містить публічну властивість blacklistedEmails
Клас Admin містить публічний метод blacklist
Клас Admin містить публічний метод isBlacklisted
Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
Виклик mango.isBlacklisted("mango@mail.com") повертає false
Виклик mango.isBlacklisted("poly@mail.com") повертає true
✅✅