// Task1
let i = 0;
while (i < 2) {
    console.log('Привет');
    i++;
}
// Task2
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}
// Task3
let k = 7;
while (k <= 22) {
    console.log(k);
    k++;
}
// Task4
const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
}
for (let key in obj) {
    console.log(`${key}—${obj[key]}`);
}
// Task5
let n = 1000;
let m = 1;
do {
    n /= 2;
    m++;
} while (n >= 50)
console.log(n);
console.log(m)
// Task6
let friday = 6;
while (friday <= 31) {
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
    friday += 7;
}