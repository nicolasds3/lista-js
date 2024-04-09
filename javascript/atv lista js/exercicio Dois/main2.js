// 2. A NASA precisa de você! Desenvolva um algoritmo que faça a contagem regressiva para o lançamento de um foguete.

const countdownElement = document.getElementById('timer');

    let seconds = 10;

    function updateCountdown() {
        if (seconds > 0) {
            countdownElement.textContent = seconds + ' segundos restante';
            seconds--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = 'VAI SE FUDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEER';
        }
    }

    updateCountdown();