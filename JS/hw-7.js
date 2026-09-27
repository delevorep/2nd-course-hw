//Task 1.
const string = "js";
console.log(string.toUpperCase());
//Task 2.
const arr2 = ['123', '234', '345', '456', '123', '234', '345', '456'];
const str2 = '2';
const newArr = (arr, str) => {
    let result = [];
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) { result.push(element) };
    });
    return result;
}
console.log(newArr(arr2, str2));
//Task 3.
const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));
//Task 4.
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(arr4.sort()[0]);
console.log(arr4.sort()[arr4.length - 1]);
//Task 5.
console.log(Math.floor((Math.random() * 10) + 1))
//Task 6.
const arr6 = (num) => {
    let result = [];
    for (let i = 0; i < num / 2; i++) {
        const element = Math.floor(Math.random() * num);
        result.push(element);
    }
    return result;
}
let num6 = prompt('Введите целое число:');
if (Number.isInteger(+num6)) {
    console.log(arr6(+num6));
} else {
    alert('Вы ввели не целое значение');
}
//Task 7.
const randomRange = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min; };
console.log(randomRange(4, 23));
//Task 8.
let currentDate = new Date();
console.log(currentDate);
//Task 9.
let days73 = 73 * 24 * 60 * 60 * 1000;
let resultDate = new Date(+currentDate + days73);
console.log(resultDate);
//Task 10.
const dateRU = (date) => {
    const weekday = date.toLocaleDateString('ru-RU', { weekday: 'long' });
    const month = date.toLocaleDateString('ru-RU', { month: 'long' });
    return result = `Дата: ${date.getDate()} ${month} ${date.getFullYear()} — это ${weekday}.\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}
console.log(dateRU(currentDate));