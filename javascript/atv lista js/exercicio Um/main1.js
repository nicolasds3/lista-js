// 1. Faça um algoritmo que some quantos números o usuário quiser, sempre pedindo seus valores a ele, e que ao fim mostre o resultado.

function somarNumeros() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = parseInt(prompt("Digite um número (ou digite '0' para encerrar): "));

        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, digite um número válido.")
        }

        continuar = confirm("Deseja continuar somando os números?");
    }

    alert("A soma dos números é: " + soma);
}

somarNumeros();