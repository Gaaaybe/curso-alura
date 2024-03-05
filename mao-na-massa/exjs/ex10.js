let saldo = 1000;
let deposito; 
let saque;
let opcao = 3;

console.log('Bem vindo ao banco digital automatico!');
console.log('Escolha uma opção:\n1 - Depositar\n2 - Sacar\n3 - Ver saldo\n4 - Sair');

    switch(opcao){
        case 1:
            deposito = 200;
            saldo += Number(deposito);
            console.log(`Depósito de R$${deposito} realizado com sucesso!`);
            break;

        case 2:
            saque = 500;
            if(saque <= saldo){
                saldo -= Number(saque);
                console.log(`Saque de R$${saque} realizado com sucesso!`);
            } else{
                console.log('Saldo insuficiente para realizar o saque.');
            }
            break;
        case 3:
            console.log(`Seu saldo é de R$${saldo}`);
            break;
    }