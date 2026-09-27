function textRoll() {
    while (true) {
    let requestString = prompt("Введите текст:");
    if (requestString === '') {
        alert(`Вы не ввели ничего. Необхдимо ввести текст.`);
    }
    if (requestString === null) {
        return;
    }
    let reverseString = requestString.split('').reverse().join('');
    alert(`Перевернутая строка:\n${reverseString}`);
    }
}