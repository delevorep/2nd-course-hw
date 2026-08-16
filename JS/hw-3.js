// Task1
let password = 'Qwerty123';
let input = prompt('Введите пароль');
alert(input == password ? 'Пароль введен верно' : 'Пароль введен неправильно');
// Task2
let c = 2;
alert((c>0)&&(c<10) ? 'Верно' : 'Неверно');
// Task3
let d = 6;
let e = 101;
alert((d>100)||(e>100) ? 'Верно' : 'Неверно');
// Task4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// Task5
let monthNumber = prompt('Введите номер месяца');
switch (true) {
    case ((monthNumber == 12)||(monthNumber == 1)||(monthNumber == 2)):
        alert('Зима');
        break;
    case ((monthNumber >= 3)&&(monthNumber <= 5)):
        alert('Весна');
        break;
    case ((monthNumber >= 6)&&(monthNumber <= 8)):
        alert('Лето');
        break;
    case ((monthNumber >= 9)&&(monthNumber <= 11)):
        alert('Осень');
        break;
    default: alert('Месяца с таким номером не существует')
        break;
}