const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? (answer = 'Открыто') : (answer = 'Закрыто');

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    // console.log(Number.parseFloat(fDish.price) + Number.parseFloat(sDish.price));

    if (
      Number.parseFloat(fDish.price) + Number.parseFloat(sDish.price) <
      Number.parseFloat(average)) {
      return 'Цена ниже средней';
    } else {
      return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
console.log(copy);
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);

const arr = [2, 4, 6];
const result = arr.filter((el) => el * 2);
console.log(result);
