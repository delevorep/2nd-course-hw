// Task 1.
const randomNumbers = [1, 5, 4, 10, 0, 3];
let i = 0;
do {
    console.log(randomNumbers[i]);
    i++;
} while (randomNumbers[i - 1] !== 10);
// Task 2.
let j = 0;
while (randomNumbers[j] !== 4) {
    j++;
}
let indexOf4 = j;
console.log(indexOf4);
// Task 3.
const moreRandomNumbers = [1, 3, 5, 10, 20];
console.log(moreRandomNumbers.join(' '));
// Task 4.
let One = [];
for (let k = 0; k < 3; k++) {
    let onetyOne = [];
    for (let l = 0; l < 3; l++) {
        onetyOne[l] = 1;
    }
    One[k] = [...onetyOne];
};
console.log(One);
// Task 5.
let ones = [1, 1, 1];
let m = 0;
do {
    ones.push(2);
    m++;
} while (m < 3);
console.log(ones);
// Task 6.
const mix = [9, 8, 7, 'a', 6, 5];
let arr6 = mix.filter(mix => mix !== 'a');
console.log(arr6);
// Task 7.
let arr7 = [9, 8, 7, 6, 5];
let num = +prompt('Угадай число');
let message = (arr7.includes(num)) ? 'Угадал' : 'Не угадал';
alert(message);
// Task 8.
let string = 'abcdef';
console.log(string.split('').reverse().join(''));
// Task 9.
let arr9 = [[1, 2, 3], [4, 5, 6]];
flatArr = [];
arr9.forEach(array => {
    flatArr.push(...array);
});
console.log(flatArr);
// Task 10.
let arr10 = [];
for (let i = 0; i < 10; i++) {
    arr10.push(Math.floor(Math.random() * 10));
}
console.log(arr10);
for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}
// Task 11.
let powerOf2 = (arr) => { return arr2 = arr.map(element => element ** 2); }
console.log(powerOf2(arr10));
// Task 12.
const strings = ['1111', '1235', '324', '10', '0', '3323232'];
let arrOfLenghts = (arr) => { return arr2 = arr.map(element => element.length); }
console.log(arrOfLenghts(strings));
// Task 13.
let arr13 = [];
for (let i = 0; i < 10; i++) {
    arr13.push(Math.floor((Math.random() - 0.5) * 10));
}
console.log(arr13);
let negativeArr = (arr) => { return arr.filter(element => element < 0); }
console.log(negativeArr(arr13));
// Task 14.
let arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14.push(Math.floor(Math.random() * 10));
}
console.log(arr14);
console.log(arr14.filter(element => element % 2 == 0));
// Task 15.
let arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15.push(Math.floor(Math.random() * 10));
}
console.log(arr15);
console.log(arr15.reduce((total, current) => total + current,0)/arr15.length);