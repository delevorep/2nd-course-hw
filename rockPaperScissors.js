function rockPaperScissors() {
    const RPS = ["камень", "бумага", "ножницы"];
    let usersChoice = prompt('Цу-е-фа!:');
    while (usersChoice === '' || !RPS.includes(usersChoice)) {
        usersChoice = prompt(`Вы ввели некорректный вариант. Выберите камень, ножницы или бумагу и введите ваш ответ в пустое поле.`);
    }
    const aiChoice = RPS[Math.floor(Math.random() * 3)];
    if (usersChoice === null) {
        return;
    }
    while (Math.abs(RPS.indexOf(usersChoice.toLowerCase()) - RPS.indexOf(aiChoice.toLowerCase())) === 2) {
        RPS.unshift(RPS.pop());
    }
    switch (true) {
        case RPS.indexOf(usersChoice.toLowerCase()) < RPS.indexOf(aiChoice.toLowerCase()):
            alert(`Ваш выбор: "${usersChoice}". Компьютер выбрал: "${aiChoice}".\nКомпьютер победил.`);
            break;
        case RPS.indexOf(usersChoice.toLowerCase()) > RPS.indexOf(aiChoice.toLowerCase()):
            alert(`Ваш выбор: "${usersChoice}". Компьютер выбрал: "${aiChoice}".\nВы победили.`);
            break;
        default:
            alert(`Ваш выбор: "${usersChoice}". Компьютер выбрал: "${aiChoice}".\nНИЧЬЯ.`);
            break;
    }
}