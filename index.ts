import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 1;
const max = 100;
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const guessNumber = (attempts: number = 0) => {
    rl.question(`Adivinhe um número entre ${min} e ${max}: `, (input) => {
        const guess = parseInt(input);
        attempts++;

        if (isNaN(guess)) {
            console.log("Por favor, insira um número válido.");
            guessNumber(attempts);
        } else if (guess < min || guess > max) {
            console.log(`Por favor, escolha um número entre ${min} e ${max}.`);
            guessNumber(attempts);
        } else if (guess < secretNumber) {
            console.log("Muito baixo! Tente novamente.");
            guessNumber(attempts);
        } else if (guess > secretNumber) {
            console.log("Muito alto! Tente novamente.");
            guessNumber(attempts);
        } else {
            console.log(`Parabéns! Você adivinhou o número ${secretNumber} em ${attempts} tentativas.`);
            rl.close();
        }
    });
};

guessNumber();
