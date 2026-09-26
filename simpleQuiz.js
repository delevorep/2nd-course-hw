function simpleQuiz() {
    const quiz = [
        {
            question: "Какого цвета небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let answer;
    let score = 0;
    for (const element of quiz) {
        answer = prompt(`Ответьте на вопрос: ${element.question}\n\n${element.options[0]}\n${element.options[1]}\n${element.options[2]}\n\nВведите номер правильного ответа.`);
        if (answer === null) {
            return;
        }
        if (answer == element.correctAnswer) {
            alert(`Правильный ответ!`);
            score++;
        } else {
            if (answer === '' || isNaN(answer)) {
                alert(`Введен некорректный ответ`);
            } else {alert(`Ответ неверный. Правильный ответ:\n${element.options[element.correctAnswer - 1]}`);}
        }
    }
    alert(`Вы ответили правильно на ${score} из ${quiz.length} вопросов`);
}