// (*) Продвинутая задача на работу с объектами и массивами
// В этой задаче мы уже усложним работу с объектами и массивами. Она необязательна и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.
// Задача:
// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.Просто распишите логику действий строка за строкой.

const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  // 'Takesi',
  // 'Sam',
];

function sortStudentsByGroups(arr) {
  arr.sort();
  // console.log(arr);
  const studentsGroupe1 = [];
  const studentsGroupe2 = [];
  const studentsGroupe3 = [];
   const arrLostStudent = [];
  let lostStudent = "-" ;
  for (const student of arr) {
    // console.log(arr[3]);
    if (student < arr[3]) {
      console.log(student);
      studentsGroupe1.push(student);
    } else if (student < arr[6]) {
      //  console.log(student);
      studentsGroupe2.push(student);
    } else if (student <= arr[8]) {
      studentsGroupe3.push(student);
    } else if (student >= arr[9]) {
      arrLostStudent.push(student);
      lostStudent = arrLostStudent.join(', ');
    }
  }
  return [
    studentsGroupe1,
    studentsGroupe2,
    studentsGroupe3,
    `Оставшиеся студенты: ${lostStudent}`,
  ];
}
console.log(sortStudentsByGroups(students));

// const students = [
//   'Peter',
//   'Andrew',
//   'Ann',
//   'Mark',
//   'Josh',
//   'Sandra',
//   'Cris',
//   'Bernard',
//   'Takesi',
//   'Sam',
//   'yota'
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
//   ];
// }

// sortStudentsByGroups(students);

// console.log(sortStudentsByGroups(students));
