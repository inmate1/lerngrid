// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);
////////////////////////////////////////////////////
console.log(document);
const body = document.body;
console.log(body);

const list = document.querySelector('.list');
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const lastListItem = list.lastElementChild;
console.log(lastListItem);

const listItems = list.children;
console.log(listItems);
/////////////////////////////////////
const image = document.querySelector('.image');
console.log(image.src); // https://picsum.photos/id/9/320/240
console.log(image.alt); // A laptop

image.src = 'https://picsum.photos/id/13/640/480';
image.alt = 'River bank';
console.log(image.src);
///////////////////////////////////////////////////
// const linkGoIT = document.querySelector(".link");
// console.log(linkGoIT.href); // "<https://goit.global>"
// linkGoIT.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
// console.log(linkGoIT.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"
////////////////////////////////////

const el = document.querySelector(".text")
const nested = document.querySelector('.sub-text');

console.log(el.textContent); // "Имя пользователя: Манго"
console.log(nested.textContent); // "Манго"
console.log(el.textContent); // "Имя пользователя: Манго"
el.textContent = 'Имя пользователя: Poly';
console.log(el.textContent);
////////////////////////////////////////////
const link = document.querySelector('.link');
console.log(link.classList);

const hasActiveClass = link.classList.contains('is-active');
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add('special');
console.log(link.classList);

link.classList.remove('is-active');
console.log(link.classList);

link.classList.toggle('is-active');
console.log(link.classList);

link.classList.replace('special', 'regular');
console.log(link.classList);
/////////////////////////////////////////////
// Метод insertAdjacentHTML()
const oldList = document.querySelector('.inslist');

const newTechnologies = ['React', 'TypeScript', 'Node.js'];
const markup = newTechnologies
  .map(technology => `<li class="list-item new">${technology}</li>`)
  .join('');

oldList.insertAdjacentHTML('beforeend', markup);
oldList.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');
//////////////////////////////////////////////////////
// События
// Метод addEventListener()
const singleBtn = document.querySelector('#single');

const handleClick = () => {
  console.log('click event listener callback');
};

singleBtn.addEventListener('click', handleClick);

// ===============================================
const multiBtn = document.querySelector('#multiple');

const firstCallback = () => {
  console.log('First callback!');
};
const secondCallback = () => {
  console.log('Second callback!');
};
const thirdCallback = () => {
  console.log('Third callback!');
};

multiBtn.addEventListener('click', firstCallback);
multiBtn.addEventListener('click', secondCallback);
multiBtn.addEventListener('click', thirdCallback);
//////////////////////////
// Метод removeEventListener()
const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector('.target-btn');

const handleClicks = () => {
  console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
  btn.addEventListener('click', handleClicks);
  console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
  btn.removeEventListener('click', handleClicks);
  console.log('click event listener was removed from btn');
});
////////////////////////////////////
// Свойства  key и code
const clearLogBtn = document.querySelector('.js-clear');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

console.log(clearLogBtn);

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML('afterbegin', markup);

  if (type === 'keyup') {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
///////////////////////////////////
// События элементов форм
// Событие submit
const registerForm = document.querySelector(".form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login.value}, Password: ${password.value}`);
  form.reset();
}
/////////////////////////////////////////
// Событие change
// Событие change происходит после смены элемента формы.
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(event1) {
  const selectedOptionValue = event1.currentTarget.value;
  const selectedOptionIndex = event1.currentTarget.selectedIndex;
  const selectedOptionText =
    event1.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
///////////////////
// Событие input
// Событие  inputпроисходит только на текстовых полях и  textarea.
const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});
/////////////////////////
// Событие  focus и blur
const textInput1 = document.querySelector('.text-input1');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInput1.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInput1.blur();
});

textInput1.addEventListener('focus', () => {
  textInput1.value = 'This input has focus';
});

textInput1.addEventListener('blur', () => {
  textInput1.value = '';
});
