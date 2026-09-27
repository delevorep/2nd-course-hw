function guessTheNumber() {
    rndNumber = Math.ceil((Math.random() * 100));
    console.log(rndNumber);
    let guess = prompt ('Угадай число от 1 до 100');
    do {
        if (guess === null) {
            return;
        }
        if (guess === '' || isNaN(guess) || guess < 1 || guess > 100) {
            guess = prompt(`Некорректный ввод. Введите число от 1 до 100`);
        } else {
            if (guess > rndNumber) { message = 'Меньше' } else { message = 'Больше'; };
        }
        if (guess == rndNumber) {
            alert(`Правильный ответ!`);
            return;
        }
        guess = prompt(message);
    } while (guess !== rndNumber);
}