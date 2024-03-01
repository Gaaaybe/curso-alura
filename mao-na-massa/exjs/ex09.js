let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let linguagem = prompt("Digite a linguagem de programação que vc está estudando: ");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let opcao = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);
if(opcao == 1){
    console.log(`Muito bom! Continue estudando e você terá muito sucesso.`);
} else{
    console.log(`Ahh que pena... Já tentou aprender outras linguagens?`)
}