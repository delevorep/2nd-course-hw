// Task 1.
let min = (x, y) => { return x < y ? x : y; };
console.log(min(8, 4));
console.log(min(6, 6));
// Task 2.
let evenOdd = (x) => { return x % 2 == 0 ? 'Число четное' : 'Число нечетное'; };
console.log(evenOdd(5));
console.log(evenOdd(6));
// Task 3.
let powerOf2out = (x) => { console.log(x ** 2); };
powerOf2out(5);
let powerOf2 = (x) => { return x ** 2; };
console.log(powerOf2(4));
// Task 4.
function ageCheck(age) {
    // let age = prompt("Сколько вам лет?");
    if (age <= 0) { result = 'Вы ввели неправильное значение' } else {
        result = age < 13 ? 'Привет, друг!' : 'Добро пожаловать!';
    };
    return result;
}
alert(ageCheck(prompt("Сколько вам лет?")));
// Task 5.
function multiplyNumbers(x, y) {
    return (typeof x === 'number' && typeof y === 'number') ? x * y : 'Одно или оба значения не являются числом';
}
console.log(multiplyNumbers(5, 6));
console.log(multiplyNumbers(true, 6));
// Task 6.
function numberCheck(n) {
    n = +prompt("Введите число:");
    return (typeof n == 'number') ? `n в кубе равняется ${n ** 3}` : 'Переданный параметр не является числом';
};
console.log(numberCheck());
// Task 7.
const circle1 = {
    radius: 10,
    getArea() {
        return Math.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
const circle2 = {
    radius: 15,
    getArea() {
        return Math.PI * (this.radius ** 2);
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());