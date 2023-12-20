'use strict'

// задание 1
function calculateVolumeAndArea(side) {
    const V = side ** 3;
    const S = 6 * (side**2);
    if (side>0 && Number.isInteger(side)){      // создаю условие, при котором наше ребро будет только целым числом.
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`; // использую шаблонную строку для возвращения результата
    } else {
        return `При вычислении произошла ошибка`
    }
}
// console.log(calculateVolumeAndArea(5));
// console.log(calculateVolumeAndArea(15));
// console.log(calculateVolumeAndArea(15.5));
// console.log(calculateVolumeAndArea('15'));
// console.log(calculateVolumeAndArea(-15));

// задние 2

function getCoupeNumber(num) {
    if (num>=1 && num<=36 && Number.isInteger(num)){    //задаю условие, что переданный аргумент будет обязательно положительным и целым числом
        return Math.ceil(num / 4);         // при делении номера места на количество мест в одном купе округляю к большему и получаю номер купе
    } else if (num === 0 || num > 36){     // условие для вывода сообщения
        return `Таких мест в вагоне не существует`;
    } else {                                 // условие, если аргумент отрциательный, дробный или не число
        return `Ошибка. Проверьте правильность введенного номера места`; 
    }  
}
// console.log(getCoupeNumber(33));
// console.log(getCoupeNumber(7));
// console.log(getCoupeNumber(300));
// console.log(getCoupeNumber(0));
// console.log(getCoupeNumber(7.7));
// console.log(getCoupeNumber(-10));
// console.log(getCoupeNumber('Hello'));


// задание 3

const numbersMass = [2, 5, 10, 'Shopping', 20, 'Homework'];

let results = numbersMass.map(function (num) {
    if (typeof num === 'number') {               //делаю проверку на тип данных - число
        return num * 2;
    } else if (typeof num === 'string') {        //делаю проверку на тип данных - строка
        return num + ` - done`;
    }
})
// console.log(results);

// задание 4

const dataMass = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];
for (let i = dataMass.length - 1; i >= 0; i--){  // создаю цикл, который начнет идти с последнего элемента массива и будет двигаться с шагом -1
    result.push(dataMass[i]);  //каждое занчение добавляю в пустой массив
}
// console.log(result);

// задание 5

const familyMass = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family) {
    if (family.length === 0) {     //делаю проверку на пустоту массива
        return `Семья пуста`;
    } else {
        let str = family.join(' ');   //с помощью метода join первращаю массив в строку по пробелу
        return `Семья состоит из: ${str}`;
    }
}
// console.log(showFamily(familyMass));

// задание 6

const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }


// 6.1 
// неправильная функция и причины
// function isOpen(prop) {
//   let answer = ''
//   prop ? (answer = 'Закрыто') : (answer = 'Открыто')// присвоение в тернарном операторе + неправильный порядок для условия для переменной prop

//   return answer;
// }

// console.log(isOpen(openNow))

// 6.1 исправленная функция
function isOpen(prop) {
    let answer = '';
    answer = prop ? 'Открыто' : 'Закрыто'; 
   
    return answer;
  }

// console.log(isOpen(restorantData.openNow))

// 6.2
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseInt(fDish.price) + parseInt(sDish.price) < parseInt(average)) {    //необходимо при складывании привести все к числовому типу данных, так как в объекте значения записаны как строки
        return 'Цена ниже средней'
    } else {
        return 'Цена выше средней'
    }
}

// console.log(
//     isAverageLunchPriceTrue(
//         restorantData.menu[0],
//         restorantData.menu[1],
//         restorantData.averageLunchPrice
//     )
// )
  

// задача про звездочки

function drowPiramyd(height) {
    for (let i = 0; i < height; i++) {
        let str = '';
        for (let j = 0; j < height - i - 1; j++){
            str += ' ';
        }
        for (let j = 0; j < 2 * i + 1; j++){
            str += '*';
        }
        console.log(str);
    }
}
// drowPiramyd(6);
