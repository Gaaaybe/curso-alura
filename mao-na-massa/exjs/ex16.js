let tentativas = 3;
let numeroSorteado = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(numeroSorteado);

while (tentativas > 0) {
    let chute = prompt("Digite um número entre 1 e 10");
    if (chute == numeroSorteado){
        console.log("Parabéns! Você acertou!");
        tentativas = 0;
    }
    else{
        tentativas--;
        console.log(`Você errou! Você tem ${tentativas} tentativas restantes.`);
    }

}