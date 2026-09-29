function simpleMath() {
    do {
        let message;
        let guess;
        let answer;
        let number1 = Math.ceil((Math.random() * 20));
        let number2 = Math.ceil((Math.random() * 20));
        switch (Math.ceil((Math.random() * 4))) {
            case 1:
                message = '+';
                answer = number1 + number2;
                break;
            case 2:
                message = '-';
                let buf = number2;
                if (number1 < number2) { number2 = number1; number1 = buf; };
                answer = number1 - number2;
                break;
            case 3:
                message = '*';
                number1 = Math.ceil((Math.random() * 20));
                number2 = Math.ceil((Math.random() * 20));
                answer = number1 * number2;
                break;
            case 4:
                message = '/';
                let fakeAnswer = Math.ceil((Math.random() * 10));
                number1 = fakeAnswer * number2;
                answer = fakeAnswer
                break;
            default:
                break;
        }
        guess = prompt(`Сколько будет ${number1} ${message} ${number2} ?`);
        while (guess === '' || isNaN(guess)) {
            guess = prompt(`Некорректный ввод. Необхдимо ввести число.\nСколько будет ${number1} ${message} ${number2} ?`);
        }
        if (guess === null) {
            return;
        }
        if (guess == answer) { alert(`Правильный ответ!`); } else { alert(`Ответ неверный`); }
    } while (true);
}